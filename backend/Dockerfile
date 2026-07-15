FROM python:3.12.3

COPY requirements.txt .

RUN pip install requirements.txt

CMD [ "fastapi" , "run" , "app/main.py" , "--port" ,"80" ]