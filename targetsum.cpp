#include<iostream>
using namespace std;
int main(){
    int arr[]={1,3,4,5,6,2};
    int size=6;
    int targetsum=7;
    int pairs=0;
    for(int i=0;i<size;i++){
        for(int j=i+1;j<size;j++){
            if(arr[i]+arr[j]==targetsum){
                pairs++;
            }
        }
    }
    cout<<pairs<<endl;
    return 0;
}