from django.contrib.auth.base_user import BaseUserManager
from django.core.exceptions import ValidationError
from django.core.validators import validate_email
from django.utils.translation import gettext_lazy as _
import logging

logger = logging.getLogger(__name__)


class CustomUserManager(BaseUserManager):

    def email_validator(self, email):
        try:
            validate_email(email)
        except ValidationError:
            raise ValueError(_("You must provide a valid email"))

    def create_user(self, first_name, last_name, email, password, role, **extra_fields):
        if not first_name:
            raise ValueError(_("Users must submit a first name"))

        if not last_name:
            raise ValueError(_("Users must submit a last name"))

        if email:
            email = self.normalize_email(email)
            self.email_validator(email)
        else:
            raise ValueError(_("Valid email address is required"))

        if role not in ["mentor", "mentee"]:
            raise ValueError(_("Role must be either 'mentor' or 'mentee'."))

        user = self.model(
            first_name=first_name, last_name=last_name, email=email, **extra_fields
        )

        user.set_password(password)  # hashes the password before storing in database
        extra_fields.setdefault("is_staff", False)
        extra_fields.setdefault("is_superuser", False)

        try:
            user.save()
            logger.info(f"User {user.email} created successfully as a {role}.")
        except Exception as e:
            logger.error(f"Failed to save user: {e}")

        return user

    def create_superuser(self, first_name, last_name, email, password, **extra_fields):

        extra_fields.setdefault("is_staff", True)
        extra_fields.setdefault("is_superuser", True)
        extra_fields.setdefault("is_active", True)

        if extra_fields.get("is_superuser") is not True:
            raise ValueError(_("Superusers must have is_superuser=True"))

        if extra_fields.get("is_staff") is not True:
            raise ValueError(_("Superusers must have is_staff=True"))

        if not password:
            raise ValueError(_("Superusers must have a password"))

        if email:
            email = self.normalize_email(email)
            self.email_validator(email)
        else:
            raise ValueError(_("Admin User: valid email address is required"))

        # Ensure superusers **do not** have a mentor or mentee role
        extra_fields.pop("role", None)

        user = self.model(
            first_name=first_name, last_name=last_name, email=email, **extra_fields
        )
        user.set_password(password)

        try:
            user.save()
            logger.info(f"Superuser {user.email} created successfully.")
        except Exception as e:
            logger.error(f"Failed to save superuser {email}: {e}")
            raise ValueError(_("Failed to create superuser."))

        return user
