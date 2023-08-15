#include<iostream>
#include<sys/types.h>
#include<sys/socket.h>
#include<stdlib.h>
#include<netinet/in.h>
#include<unistd.h>
#include<netdb.h>

using namespace std;

void error(char *msg)
{
  perror(msg);
  exit(1);
}
/**
 * filename server_ipaddress portno
*/

int main(int argc, char * argv[])
{
  if(argc<3)
  {
    cout<<"Port or host Not provide, Program terminated!.";
    exit(1);
  } 
   int sockfd, portno, st;
   struct sockaddr_in server_addr;
  struct hostent *server;
   char buffer[256];
  portno = stoi(argv[2]);
   sockfd = socket(AF_INET, SOCK_STREAM, 0);
   if(sockfd<0)
   error("Error, on opening socket");

   server = gethostbyname(argv[1]);
   
   if(server == NULL)
   cout<<"Error: no such host";

   bzero((char *)&server_addr, sizeof(server_addr));
   server_addr.sin_family = AF_INET;
   server_addr.sin_port = htons(portno);
   bcopy((char *) server->h_addr, (char *)&server_addr.sin_addr.s_addr, server->h_length);
  
    
   //connect now to sever
  if(connect(sockfd, (struct sockaddr *) & server_addr, sizeof(server_addr))<0)
     error("Connection Failed");

   int num1, num2, choice, ans; 
   
   bzero(buffer, 255);
   st = read(sockfd, buffer, 255);
   if(st<0)
   error("Not able to read text");
   printf("%s", buffer);
   cin>>num1; 
   st = write(sockfd, &num1, sizeof(int));
   if(st<0)
   error("Not able to write value on server");
   bzero(buffer, 255);
   st = read(sockfd, buffer, 255);
   if(st<0)
   error("Not able to read text");
   printf("%s", buffer);
   cin>>num2; 
   st = write(sockfd, &num2, sizeof(int));
   if(st<0)
   error("Not able to write value on server");
   bzero(buffer, 255);
   st = read(sockfd, buffer, 255);
   if(st<0)
   error("Not able to read text");
   printf("%s", buffer);
   cin>>choice; 
   st = write(sockfd, &choice, sizeof(int));
   if(st<0)
   error("Not able to write value on server");


  // read answer
  st = read(sockfd, &ans, sizeof(int));
  cout<<"Answer from server side: "<<ans<<endl; 

}