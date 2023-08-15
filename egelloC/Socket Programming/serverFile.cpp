#include<iostream>
#include<sys/types.h>
#include<sys/socket.h>
#include<netinet/in.h>
#include<stdlib.h>
#include<unistd.h>
#include<stdio.h>

using namespace std;
void error(char *msg)
{
  perror(msg);
  exit(1);
}
int main(int argc, char * argv[])
{
  int sockfd, newsockfd, st, portno;
  struct sockaddr_in server_addr, client_addr;
  socklen_t clilen;
   sockfd = socket(AF_INET, SOCK_STREAM, 0);
   if(sockfd<0)
   error("Error on opening socket");

   portno = stoi(argv[1]);

   // set addreses , port no and  family on socket
   server_addr.sin_addr.s_addr = INADDR_ANY;
   server_addr.sin_family = AF_INET;
   server_addr.sin_port = htons(portno);

   if(bind(sockfd, (struct sockaddr *)&server_addr, sizeof(server_addr))<0)
    error("Error on binding address in socket");

    listen(sockfd, 4);

    newsockfd = accept(sockfd, (struct sockaddr*)&client_addr,  &clilen);
    if(newsockfd<0)
    error("Error on accepting client request");

    FILE *fp = fopen("recieved_file.txt","a");
    int words = 0;
    int i =0;
    read(newsockfd, &words, sizeof(int));
    cout<<"No of words send by client: "<<words<<endl<<endl;
    char buffer[256];
    while(i<words)
    {
      read(newsockfd, buffer, 255);
      fprintf(fp, "%s ", buffer);
      fprintf(fp, "%s"," ");
      i++;
    }
    cout<<"File Creating Successfully"<<endl;
    close(newsockfd);
    close(sockfd);

} 