#include<iostream>
using namespace std;
struct node{
    int info;
    node* next;
};
void display(node* head){
    node*current=head;
    do
    {   cout<<"->"<<current->info;
       current=current->next;
    } while (current!=head);
    cout<<endl;
    
}
int main(){
    node* newnode,*rare =nullptr,*head=nullptr;
    int arr[4]={1,2,3,4};
    for (int i = 0; i < 4; i++)
    {   
        int n=arr[i];
        newnode=new node;
        newnode->info=n;
        
        if (rare==nullptr)
        {   newnode->next=NULL;
            head=rare=newnode;
            
        }
        else{
            rare->next=newnode;
            rare=newnode;
           rare->next=head;
        }
    }
    node*current=head;
    do
    {   cout<<"->"<<current->info;
       current=current->next;
    } while (current!=head);
    cout<<endl;
   int n=0;
   current=head;
    while (n!=2)
    {
        current=current->next;
        n++;
    }
    newnode=new node;
    newnode->info=5;
    newnode->next=current->next;
    current->next=newnode;
    display(head);
    newnode=new node;
    newnode->info=6;
    newnode->next=head;
    rare->next=newnode;
    rare=newnode;
    display(head);
    newnode=new node;
    newnode->info=7;
    newnode->next=head;
    rare->next=newnode;
    head=newnode;
    display(head);
    rare->next=head->next;
    head=head->next;
    display(head);
    current=head;
    while (current->next->next!=head)
    {
        current=current->next;
    }
    current->next=head;
    rare=current;
    display(head);
    int d=4;
    int i=0;
    current=head;
    while (i!=(d-2))
    {
        current=current->next;
        i++;
    }
    current->next=current->next->next;
    display(head);
return 0;
}