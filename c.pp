#include <iostream>
#include<vector>
using namespace std;
int main() {
    vector<int> v;
    for(int i= 0;i<5;i++){
        int ele;
        cin>>ele;
        v.push_back(ele);
    }
    for(int i=0;i<v.size;i++){
        cout<<[i]<<" ";
    }
    cout<<endl;
        
    

    return 0;
}