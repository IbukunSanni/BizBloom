# Generated by Django 5.1.5 on 2025-02-03 07:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0004_remove_education_mentor_remove_industry_mentor_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='mentor',
            name='asap_availability',
            field=models.BooleanField(default=False),
        ),
    ]
