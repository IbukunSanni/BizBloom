from django.core.management.base import BaseCommand
from users.models import Mentor, Industry


class Command(BaseCommand):
    help = "Fetch all mentors in the Manufacturing industry."

    def handle(self, *args, **kwargs):
        try:
            # Get the Manufacturing industry object
            manufacturing = Industry.objects.get(name="Manufacturing")

            # Query mentors in the Manufacturing industry
            mentors_in_manufacturing = Mentor.objects.filter(industries=manufacturing)

            # If no mentors are found, display a message
            if not mentors_in_manufacturing.exists():
                self.stdout.write(
                    self.style.WARNING("No mentors found in Manufacturing.")
                )
                return
            print("ran")

            # Print mentor details
            self.stdout.write(
                self.style.SUCCESS(
                    f"Mentors in Manufacturing ({mentors_in_manufacturing.count()} found):"
                )
            )
            for mentor in mentors_in_manufacturing:
                self.stdout.write(
                    f"- {mentor.user.get_full_name} | {mentor.job_title} at {mentor.company}"
                )

        except Industry.DoesNotExist:
            self.stdout.write(
                self.style.ERROR("Manufacturing industry not found in the database.")
            )
