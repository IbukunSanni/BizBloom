from django.core.management.base import BaseCommand
from django.apps import apps
from django.core.management.utils import get_random_secret_key


def list_model_tables():
    models = apps.get_models()
    tables = [model._meta.db_table for model in models]
    return tables


# Example usage
for table in list_model_tables():
    print(f"Model Table: {table}")


class Command(BaseCommand):
    help = "Run my custom script"

    def handle(self, *args, **kwargs):
        self.stdout.write("Running my script...")
        # Your custom script logic here
        # result = my_custom_function()
        signing_key = get_random_secret_key()
        print(signing_key)
        print("End of script run")
        # self.stdout.write(f"Script output: {result}")
