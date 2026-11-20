import unittest
from unittest.mock import MagicMock, patch

from pydantic import ValidationError

from backend.main import InquirySubmission, save_inquiry


class InquirySubmissionTests(unittest.TestCase):
    def test_accepts_contact_form_payload_and_normalizes_optional_fields(self) -> None:
        submission = InquirySubmission(
            fullName="  Ada Farmer  ",
            email="ada@example.com",
            phone=" +234 800 123 4567 ",
            organization=" ",
            role="Smallholder Farmer",
            produceInterest=" ",
            message="  Please contact me.  ",
        )

        self.assertEqual(submission.full_name, "Ada Farmer")
        self.assertEqual(submission.phone, "+234 800 123 4567")
        self.assertIsNone(submission.organization)
        self.assertIsNone(submission.produce_interest)
        self.assertEqual(submission.message, "Please contact me.")

    def test_rejects_invalid_email_and_role(self) -> None:
        payload = {
            "fullName": "Ada Farmer",
            "email": "not-an-email",
            "phone": "+234 800 123 4567",
            "role": "Unknown",
            "message": "Please contact me.",
        }

        with self.assertRaises(ValidationError):
            InquirySubmission(**payload)

    @patch("backend.main.mysql.connector.connect")
    def test_saves_submission_using_parameterized_insert(self, connect: MagicMock) -> None:
        cursor = connect.return_value.cursor.return_value
        cursor.lastrowid = 17
        submission = InquirySubmission(
            fullName="Ada Farmer",
            email="ada@example.com",
            phone="+234 800 123 4567",
            role="General",
            message="Please contact me.",
        )

        with patch.dict(
            "os.environ",
            {"MYSQL_USER": "app", "MYSQL_PASSWORD": "secret"},
            clear=False,
        ):
            submission_id = save_inquiry(submission)

        self.assertEqual(submission_id, 17)
        self.assertIn("INSERT INTO form_submissions", cursor.execute.call_args.args[0])
        self.assertEqual(cursor.execute.call_args.args[1][0], "Ada Farmer")
        connect.return_value.commit.assert_called_once()
        cursor.close.assert_called_once()
        connect.return_value.close.assert_called_once()


if __name__ == "__main__":
    unittest.main()
