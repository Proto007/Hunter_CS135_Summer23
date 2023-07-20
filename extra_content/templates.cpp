/**
 * @file templates.cpp
 * @author Sadab Hafiz
 * @brief Demonstrates template functions.
 * @version 0.1
 * @date 2023-07-20
 * 
 * @copyright Copyright (c) 2023
 * 
*/

#include <iostream>
#include <vector>
using namespace std;

/**
 * @brief return the maximum value in the given vector.
 * @tparam T Any numeric type.
 * @param values Vector of any numeric data type.
 * @return T The maximum number in the given vector.
 */
template <typename T>
T max_val(vector<T> values){
    T m = values.at(0);
    for(T each: values){
        if(each > m){
            m = each;
        }
    }
    return m;
}

/**
 * @brief 
 * @tparam T Any numeric type.
 * @tparam U Any numeric type.
 * @param num1 Number to be added.
 * @param num2 Another number to be added. Can be different type than `num1`.
 * @return T Return the sum of the given parameters in the return type of the first parameter.
 */
template <typename T, typename U>
T sum2(T num1, U num2){
    return num1 + num2;
}

// Test the template functions
int main(){
    vector<int> integers = {100,20,90,95,79,89,80};
    vector<double> doubles = {100.1,20.2,90.3,95.4,79.5,89.6,80.7};
    cout << max_val(doubles) <<endl;
    cout << max_val(integers) <<endl;
    cout << sum2(doubles.at(0),integers.at(0)) << endl;
    return 0;
}