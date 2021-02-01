# basic dockerfile

# set base image (host OS)
FROM python:3.9

# set the working directory
WORKDIR /code

# copy dependencies
COPY requirements.txt .

# install dependencies
RUN pip install -r requirements.txt

# copy files from server into code
COPY server/ .

# commands to run
# CMD ["python", "./download_img_server"]
CMD ["python", "download_img_server"]
# CMD ["uvicorn", "main:app"]