#selecting version of python
FROM python:3.8-alpine
#setting working directory
WORKDIR /model
#copying requirements.txt file to the working directory
COPY requirements.txt /model
#installing the dependencies
RUN pip install -r requirements.txt --no-cache-dir
#copy the current directory contents to the container at /flask-backend
COPY . /model
#expose the port 5000
EXPOSE 8080
#run the app
CMD python3 main.py



