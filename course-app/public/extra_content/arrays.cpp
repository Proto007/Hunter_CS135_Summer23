/***
 * Author: Sadab Hafiz
 * Class: CS135 SUMMER
 * A bunch of common array algorithms shown using an integer array
*/
#include <iostream>
using namespace std;

const int CAPACITY = 10;

/**
 * @brief Print out an array in formatted way
 * 
 * @param arr array that is being printed
 * @param size size of the array
*/
void printArr(int arr[], int size){
    for(int pos = 0; pos<size; pos++){
        if(pos > 0){
            cout << " | ";
        }
        cout << arr[pos];
    }
    cout << endl;
}

/**
 * @brief Check if the array contains given item
 * 
 * @param arr array that is being checked
 * @param item query item that we are looking for
 * @param size size of the array
 * @return true if the item exists in the array
 * @return false if the item is not found
 */
bool contains(int arr[], int item, int size){
    bool found = false;
    for(int i=0; i<size; i++){
        if (arr[i] == item){
            found = true;
        }
    }
    return found;
}

/**
 * @brief Remove an item from the array without maintaining order
 * 
 * @param arr array where the item is to be removed
 * @param pos index of the item being removed
 * @param size size of the array
 */
void removeUnordered(int arr[], int pos, int &size){
    arr[pos] = arr[size-1];
    arr[size-1] = 0;
    size--;
}

/**
 * @brief Remove an item from the array by maintaining order
 * 
 * @param arr array where the item is to be removed
 * @param pos index of the item being removed
 * @param size size of the array
 */
void removeOrdered(int arr[], int pos, int &size){
    for(int i=pos; i<size-1; i++){
        arr[i] = arr[i+1];
    }
    arr[size-1] = 0;
    size--;
}

/**
 * @brief Swap items in index a with item in index b
 * 
 * @param arr array where the swap is taking place
 * @param a index of first item to be swapped
 * @param b index of second item to be swapped
 * @param size size of the array
 */
void swap(int arr[], int a, int b, int &size){
    int temp = arr[b];
    arr[b] = arr[a];
    arr[a] = temp;
}

/**
 * @brief Add an item to the array at given index
 * 
 * @param arr array where the item is being added
 * @param pos index where we are adding the item
 * @param val item that is being added to the array
 * @param size size of the array
 * @return true if the item can be added to the array
 * @return false if there is no space to add the item
 */
bool addItem(int arr[], int pos, int val, int &size){
    if(size >= CAPACITY){
        return false;
    }
    for(int i=size+1;i>=pos;i--){
        arr[i] = arr[i-1];
    }
    arr[pos] = val;
    size++;
    return true;
}

int main(){
    int values[CAPACITY];
    int size = 0;
    // CALL THE FUNCTIONS TO TEST THEM OUT
    // TRY COMMENTING ALL THE LINES OF THE FUNCTIONS TO UNDERSTAND HOW THEY WORK
}
