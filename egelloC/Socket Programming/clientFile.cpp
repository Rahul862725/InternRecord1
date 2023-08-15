#include<iostream>
#include<sys/types.h>
#include<sys/socket.h>
#include<netinet/in.h>
#include<stdlib.h>
#include<unistd.h>
#include<netdb.h>

using namespace std;

void error(char * msg)
{
  perror(msg);
  exit(1);
}
int main(int argc, char *argv[])
{
  int sockfd, st, portno;
  struct sockaddr_in server_addr;
  struct hostent *server;
   portno = stoi(argv[2]);
   server = gethostbyname(argv[1]);

   sockfd = socket(AF_INET, SOCK_STREAM, 0);
   if(sockfd<0)
   error("Error on creating socket");

   server_addr.sin_family = AF_INET;
   server_addr.sin_port = htons(portno);
  bcopy((char * )server->h_addr, &server_addr.sin_addr.s_addr, sizeof(server->h_addr));
  
  if(connect(sockfd, (struct sockaddr * )&server_addr,sizeof(server_addr) )<0)
  error("Error on connecting to server!");
  // file transfer code

  FILE * fp = fopen("file1","r");
  char ch ;
  char buffer[256];
  int words =0;
  while((ch = fgetc(fp))!=EOF)
  {
    if(ch == ' '||ch == '\t')
    words++;
  }
  words++;
  st = write(sockfd, &words, sizeof(int));

  rewind(fp);
  while(fscanf(fp,"%s",buffer)!=EOF)
  {
    write(sockfd,buffer, 255);
  }
  cout<<"File Send Successfully to server!"<<endl<<endl;
  close(sockfd);
}