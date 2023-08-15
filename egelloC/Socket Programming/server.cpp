#include<iostream>
#include<sys/types.h>
#include<sys/socket.h>
#include<netinet/in.h>
#include<stdio.h>
#include<unistd.h>
 

using namespace std;

void error(const char *msg)
{
    perror(msg);
    exit(1);
}

int main(int argc, char *argv[])
{
  int sockfd, portno, status, newsockfd;

  struct sockaddr_in server_addr, client_addr;
  socklen_t clilen;
  char buffer[256];
   // port number
  portno = stoi(argv[1]);
 

  bzero((struct sockaddr *)&server_addr, sizeof(server_addr));
  server_addr.sin_family = AF_INET;
  server_addr.sin_addr.s_addr = INADDR_ANY;
  server_addr.sin_port = htons(portno);
  sockfd = socket(AF_INET, SOCK_STREAM, 0);
  if(sockfd<0)
  {
    error("Error in socket opening");
  }

  bind(sockfd, (struct sockaddr *)&server_addr, sizeof(server_addr));

  listen(sockfd, 4);
 while(1){
  newsockfd = accept(sockfd, (struct sockaddr*)&client_addr, &clilen);

  if(newsockfd<0)
  {
    error("Error in accepting connection");
  }

  int num1 , num2, ans, choice;

  status = write(newsockfd, "Enter Number 1: ",strlen("Enter Number 1: "));
  if(status<0)
  cout<<"Error on sending number 1 text";
  status = read(newsockfd, &num1, sizeof(int));
  if(status<0)
  cout<<"Error on reading number ";
  status = write(newsockfd, "Enter Number 2: ",strlen("Enter Number 2: "));
  if(status<0)
  cout<<"Error on sending number 2 text";
  status = read(newsockfd, &num2, sizeof(int));
  if(status<0)
  cout<<"Error on reading number 2";
  status = write(newsockfd, "Enter your choice: ",strlen("Enter your choice: "));
  if(status<0)
  cout<<"Error on sending choice text";
  status = read(newsockfd, &choice, sizeof(int));
  if(status<0)
  cout<<"Error on reading choice";

  switch (choice)
  {
  case 0:
    ans = num1 + num2;
    break;
  case 1: 
  ans = num1-num2;
    break;
  case 2:
    ans = num1*num2;
    break;
  case 3:
    ans = num1 / num2;
    break;
  default:
    break;
  }
 
  status = write(newsockfd, &ans, sizeof(int));
 }
  close(newsockfd);
  close(sockfd);

}