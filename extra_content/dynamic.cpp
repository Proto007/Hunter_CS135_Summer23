/**
 * @file project1.cpp
 * @author Sadab Hafiz
 * @brief Demonstrate the use of basic classes and dynamic arrays
 * @version 0.1
 * @date 2023-07-05
 * 
 * @copyright Copyright (c) 2023
 * 
 */
#include <iostream>
#include <fstream>
using namespace std;

// Initialize dynamic array capacity and size
int CAPACITY = 1;
int curr_size = 0;

/**
 * @brief A class to represent a single word in the dictionary
 */
class Word{
    public:
        string word;
        string definition;
        string pos;
};

// Allocate initial Dynamic Array of Word objects
Word* dictionary = new Word[CAPACITY];

/**
 * @brief Allocate a dynamic array of twice the current capacity
 */
void allocateBigger(){
    // Double the CAPACITY and create a bigger dynamic array
    CAPACITY *= 2;
    Word* bigger = new Word[CAPACITY];
    // Copy everything from old array to new array
    for(int i=0;i<curr_size;i++){
        bigger[i] = dictionary[i];
    }
    // deallocate old array and set pointer equal to new array
    delete[] dictionary;
    dictionary = bigger;
}

/**
@param            :   The string with the `filename`
@post             :   Reads the words, definitions and pos into the
                      global-array and sets the value of `curr_size`
                      to the number of words read
*/
void readWords(string filename){
    // Create input stream to read from given file
    ifstream fin(filename);
    // Create a dummy word to read everything from the file into
    Word new_word;
    // While reading a word and pos from the file
    while(fin >> new_word.word >> new_word.pos){
        // Read the definition of the word
        getline(fin,new_word.definition);
        // Format the definition by getting rid of the " : "
        new_word.definition = new_word.definition.substr(3);
        // Resize the dynamic array if it reaches maximum capacity
        if(curr_size == CAPACITY){
            allocateBigger();
        }
        // Add the dummy Word to the array and increase the size
        dictionary[curr_size] = new_word;
        curr_size++;
    }
    // Close the file when done using it
    fin.close();
}

/**
 * @brief Get the index of the given word in the dictionary
 * 
 * @param word Word that we are looking for
 * @return int index of the word in the dictionary if it is found, -1 otherwise
 */
int getIndex(string word){
    for(int i=0;i<curr_size;i++){
        if(dictionary[i].word == word){
            return i;
        }
    }
    return -1;
}

/**
    @param word         :   The string with a new word
    @param def          :   The string with the definition of the `word`
    @param pos          :   The string with the pos of the `word`
    @return             :   return `true` if the word is successfully added to the dictionary
                            return `false` if failed (word already exists)
    @post               :   Add the given `word`, `def`, `pos` to the end of the respective global-arrays.
                            The word should not be added to the global-arrays if it already exists.
                            Update `word_count` if the word is successfully added
*/
bool addWord(string word, string def, string pos){
    // Allocate a bigger array if the array is full
    if(curr_size == CAPACITY){
        allocateBigger();
    }
    // Return false if the word already exists
    if(getIndex(word) != -1){
        return false;
    }
    // Add the word to the end of the dictionary
    dictionary[curr_size] = {word, def, pos};
    // Update the size of the dictionary
    curr_size++;
    return true;
}

// Testing Code
int main(){
    readWords("dictionary.txt");
    cout << curr_size << endl;
    cout << CAPACITY << endl;
    for(int i=0;i<10;i++){
        cout << dictionary[i].pos << endl;
    }
}