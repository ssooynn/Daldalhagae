import os.path

from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
import json

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
DB_INFO = os.path.join(BASE_DIR, 'DBInfo.json')
secrets = json.loads(open(DB_INFO).read())
DB = secrets["DB"]

DB_URL = f'mysql+pymysql://{DB["user"]}:{DB["password"]}@{DB["host"]}:{DB["port"]}/{DB["database"]}?charset=utf8'
engine = create_engine(
    DB_URL, encoding='utf-8')

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()
