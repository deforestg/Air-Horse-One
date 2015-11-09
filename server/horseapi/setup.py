from setuptools import find_packages
from setuptools import setup

try:
    with open('target/version') as f:
        version = f.readline().strip()
except:
    version = None

setup(
    name='horseapi',
    version=version,
    install_requires=[
        'uwsgi==2.0.11.2',
        'Django==1.8.2',
        'requests==2.5.2',
        'django-redis==4.2.0',
        'mysqlclient==1.3.6'
    ],
    tests_require=[],
    packages=find_packages(
        exclude=[
            "*.tests", "*.tests.*", "tests.*", "tests"
        ]
    )
)
