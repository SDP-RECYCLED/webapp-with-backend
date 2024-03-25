FROM python:3.8-alpine

# copy the requirements file into the image
COPY ./requirements.txt /website/requirements.txt

# switch working directory
WORKDIR /website

# install the dependencies and packages in the requirements file
RUN pip install -r requirements.txt

# copy every content from the local file to the image
COPY . ./website

CMD python3 main.py