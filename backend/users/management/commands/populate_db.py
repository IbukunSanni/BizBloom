import random
from django.core.management.base import BaseCommand
from users.models import User, Mentor, Industry, Education, Approach, Offer
from faker import Faker

fake = Faker()


class Coach:
    def __init__(
        self,
        first_name,
        last_name,
        years_of_experience,
        industry,
        country,
        job_title,
        company,
        bio,
        education,
    ):
        self.first_name = first_name
        self.last_name = last_name
        self.years_of_experience = years_of_experience
        self.industry = industry
        self.country = country
        self.job_title = job_title
        self.company = company
        self.bio = bio
        self.education = education

    def __str__(self):
        return f"{self.first_name} {self.last_name} ({self.years_of_experience} years) - {self.job_title} at {self.company} ({self.country})"

    def get_details(self):
        return {
            "First Name": self.first_name,
            "Last Name": self.last_name,
            "Years of Experience": self.years_of_experience,
            "Industry": self.industry,
            "Country": self.country,
            "Job Title": self.job_title,
            "Company": self.company,
            "Bio": self.bio,
        }


# List of Coach objects
mentors = [
    Coach(
        "John",
        "Davis",
        8,
        "E-commerce",
        "United States",
        "Founder & CEO",
        "John Digital Commerce",
        "I have helped dozens of online stores grow by creating effective sales strategies. "
        "My focus is on increasing website traffic and improving product visibility. "
        "I love teaching business owners how to make their online stores successful and stand out in a crowded market.",
        ["MBA in Digital Marketing", "Certified E-commerce Specialist"],
    ),
    Coach(
        "Emily",
        "Harris",
        5,
        "Graphic Design",
        "United States",
        "Creative Director",
        "Emily Design Studio",
        "As a graphic designer, I specialize in creating eye-catching logos and websites for businesses. "
        "I help entrepreneurs build strong visual brands that attract customers, and I enjoy mentoring others "
        "on how to design and market their brand effectively.",
        ["BFA in Graphic Design", "Certified Adobe Expert"],
    ),
    Coach(
        "Wale",
        "Akande",
        10,
        "Technology",
        "United States",
        "CTO & Co-founder",
        "Wale Tech Solutions",
        "I have worked with several tech companies, developing innovative apps and gadgets that help businesses grow. "
        "I enjoy assisting entrepreneurs in bringing their tech ideas to life and navigating the tech industry. "
        "My goal is to help startups leverage technology to streamline operations and reach more customers.",
        ["BSc in Computer Science", "AWS Certified Developer"],
    ),
    Coach(
        "Olivia",
        "Carter",
        7,
        "Social Media Marketing",
        "United States",
        "Social Media Strategist",
        "Olivia Marketing Agency",
        "I am a social media marketing expert, helping businesses grow by reaching their target audience on platforms "
        "like Instagram and Facebook. I teach business owners how to build their brand online and turn followers into customers. "
        "I love working with startups and guiding them in establishing a strong social media presence.",
        ["BA in Marketing", "Google Digital Marketing Certification"],
    ),
    Coach(
        "Sophia",
        "Martinez",
        6,
        "Content Creation",
        "United States",
        "Founder & Content Director",
        "Sophia Media Hub",
        "I help entrepreneurs create engaging content, including blogs and videos, to attract new customers. "
        "My focus is on helping businesses connect with their audience through storytelling. "
        "I enjoy showing others how to create content that builds their brand and drives business growth.",
        ["BA in Media Studies", "YouTube Content Strategy Certification"],
    ),
    Coach(
        "James",
        "Williams",
        9,
        "Sales",
        "Canada",
        "Sales Consultant",
        "James Business Consulting",
        "I have helped countless businesses improve their sales strategies and expand their customer base. "
        "I teach entrepreneurs how to connect with potential clients and close more deals. "
        "I enjoy guiding business owners through the sales process and helping them build long-term customer relationships.",
        ["BBA in Business Administration", "Certified Sales Professional"],
    ),
    Coach(
        "Ida",
        "Aka",
        4,
        "Fashion Design",
        "Canada",
        "Founder & Lead Designer",
        "Ida Couture",
        "As a fashion designer, I help startups bring their clothing line ideas to life. "
        "I work closely with entrepreneurs to turn their design concepts into wearable collections that stand out. "
        "I love helping new designers navigate the fashion industry and build their brands.",
        ["BA in Fashion Design", "Textile & Apparel Certification"],
    ),
    Coach(
        "Lucas",
        "Zhang",
        11,
        "Agriculture",
        "United States",
        "CEO & Head Agronomist",
        "Lucas Sustainable Farms",
        "I am a farmer with over a decade of experience helping agricultural businesses grow and improve their operations. "
        "I specialize in sustainable farming practices and crop management. "
        "I enjoy mentoring new farmers, teaching them how to improve their yields while minimizing environmental impact.",
        ["BSc in Agriculture", "Certified Organic Farming Specialist"],
    ),
    Coach(
        "Ashley",
        "Fraction",
        13,
        "Healthcare Business",
        "United States",
        "Healthcare Business Consultant",
        "Ashley Medical Solutions",
        "I have spent 13 years working in healthcare business management, helping clinics and hospitals operate efficiently. "
        "I specialize in optimizing business operations while improving patient care. "
        "I love mentoring healthcare entrepreneurs, guiding them on balancing patient needs with financial sustainability.",
        ["MBA in Healthcare Management", "Healthcare Compliance Certification"],
    ),
    Coach(
        "Michael",
        "Turner",
        15,
        "Finance",
        "United States",
        "Financial Consultant",
        "Michael Financial Advisory",
        "For over 15 years, I have helped companies manage their money and investments. "
        "I specialize in budgeting, financial planning, and helping businesses make smart financial decisions. "
        "I enjoy mentoring business owners and teaching them how to make their finances work for them.",
        ["BSc in Finance", "Chartered Financial Analyst (CFA)"],
    ),
    Coach(
        "Bobby",
        "Valentino",
        7,
        "Coffee Shop",
        "United States",
        "Founder & CEO",
        "Bobby Coffee Roasters",
        "I built a successful coffee chain from the ground up in Philadelphia, expanding to 12 locations. "
        "I also source coffee beans from Ghana and sell them online. "
        "I have experience in hiring, marketing, branding, fundraising, and sales.",
        ["BBA in Entrepreneurship", "Barista Certification"],
    ),
    Coach(
        "Antonio",
        "Harris",
        5,
        "Physical Fitness",
        "Canada",
        "Online Fitness Coach",
        "Antonio Fitness Academy",
        "I built my own fitness training business entirely online. "
        "I market my services through social media, where I have built a following of 2.4 million. "
        "I have trained over 500 clients and maintain a 5-star rating.",
        ["BSc in Sports Science", "Certified Personal Trainer (CPT)"],
    ),
    Coach(
        "Kendal",
        "Fredricks",
        4,
        "IT Consulting",
        "United States",
        "CEO & Cybersecurity Consultant",
        "Kendal Security Solutions",
        "I started my own Cyber Security Consulting agency after working in corporate cybersecurity for 10 years. "
        "I landed multi-million dollar clients and grew my business from $750K in the first year to $2.1M in the second. "
        "I now employ 10 cybersecurity experts and manage a team of 35.",
        ["BSc in Cybersecurity", "CISSP Certification"],
    ),
    Coach(
        "Jammie",
        "Grey",
        8,
        "Technology",
        "Canada",
        "Founder & CEO",
        "Jammie Tech Solutions",
        "With eight years of experience as an entrepreneur, I founded and grew a tech company, Jammie Tech Solutions. "
        "My expertise is in product strategy and digital marketing. "
        "As a mentor, I help provide guidance, support, and clarity to up-and-coming entrepreneurs.",
        ["BSc in Computer Science", "AWS Certified Developer"],
    ),
]


class Command(BaseCommand):
    help = "Populate the database with at least 2 industries and 5 mentors in each from Canada or the US."

    def handle(self, *args, **kwargs):
        industries = ["Software Engineering", "Finance", "Healthcare", "Manufacturing"]

        offers = [
            "Career Growth",
            "Tech Skills",
            "Job Search",
            "Interview Prep",
            "Resume Review",
            "Leadership",
            "Networking",
            "Time Mgmt",
            "Work-Life Balance",
            "Startup Advice",
        ]

        approaches = [
            "Active Listening",
            "Personalized",
            "Open Communication",
            "Goal-Oriented",
            "Hands-On",
            "Structured",
            "Collaborative",
            "Empathetic",
            "Solution-Focused",
            "Feedback-Driven",
            "Encouraging",
            "Adaptive",
        ]

        created_industries = {}

        # ✅ Step 1a: Create industries first
        for industry in industries:
            industry_obj, _ = Industry.objects.get_or_create(name=industry)
            created_industries[industry] = (
                industry_obj  # Store created industry objects
            )

        created_offers = {}

        # ✅ Step 1c: Create offers first
        for offer in offers:
            offer_obj, _ = Offer.objects.get_or_create(name=offer)
            created_offers[offer] = offer_obj  # Store created offer objects

        created_approaches = {}

        # ✅ Step 1d: Create approaches first
        for approach in approaches:
            approach_obj, _ = Approach.objects.get_or_create(name=approach)
            created_approaches[approach] = (
                approach_obj  # Store created approach objects
            )

        # ✅ Step 2: Create mentors and assign them industries

        for coach in mentors:
            user = User.objects.create_user(
                first_name=coach.first_name,
                last_name=coach.last_name,
                email=f"{coach.first_name.lower()}{coach.last_name.lower()}@gmail.com",
                password="password123",
                role="mentor",
            )

            mentor = Mentor.objects.create(
                user=user,
                country=coach.country,
                years_of_experience=coach.years_of_experience,
                job_title=coach.job_title,
                company=coach.company,
                bio=coach.bio,
                asap_availability=random.choice([True, False]),
            )
            mentor.save()  # Save mentor before assigning industries

            # ✅ Randomly assign the mentor to one or more industries
            industry_choices = random.sample(
                list(created_industries.values()),  # Use stored industry objects
                k=random.randint(1, 2),  # Each mentor gets 1 or 2 industries
            )

            for industry in industry_choices:
                industry.mentors.add(
                    mentor
                )  # ✅ Correctly add the mentor to the industry

            created_education = {}

            for ed in coach.education:
                tmp_ed_obj, _ = Education.objects.get_or_create(name=ed)
                tmp_ed_obj.mentors.add(mentor)  # ✅ Correctly add the mentor to the ed

            # ✅ Randomly assign the mentor to one or more offers
            offer_choices = random.sample(
                list(created_offers.values()),  # Use stored offer objects
                k=random.randint(1, 3),  # Each mentor gets 1 or 2 offers
            )

            for offer in offer_choices:
                offer.mentors.add(mentor)  # ✅ Correctly add the mentor to the offer

            # ✅ Randomly assign the mentor to one or more approaches
            approach_choices = random.sample(
                list(created_approaches.values()),  # Use stored approach objects
                k=random.randint(1, 3),  # Each mentor gets 1 or 2 approaches
            )

            for approach in approach_choices:
                approach.mentors.add(
                    mentor
                )  # ✅ Correctly add the mentor to the approach

        self.stdout.write(
            self.style.SUCCESS(
                "Database populated successfully with mentors from Canada & the US!"
            )
        )
