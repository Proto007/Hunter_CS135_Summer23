export const homeworksData = [
    [
        {
            name: "1A",
            due: "06/11/2023 11:59 PM",
            link: "https://www.gradescope.com/courses/545354/assignments/2927385/",
            prompt: "Create a C++ program that gets three names from the user and prints them out to the screen."
        },
        {
            name: "1B",
            due: "06/11/2023 11:59 PM",
            link: "https://www.gradescope.com/courses/545354/assignments/2927391/",
            prompt: "Create a C++ program that asks the user for the number of gallons, the fuel efficiency in mpg, and the price of gas per gallon. Use this information to calculate how far the car can go (distance) and how much it costs to go 100 miles. Print these values to the screen."
        },
    ],
    [
        {
            name: "2A",
            due: "06/18/2023 11:59 PM",
            link: "https://www.gradescope.com/courses/545354/assignments/2936139/",
            prompt: 'Write a program that asks the user for a word and prints out the word with each character separated by a newline.\n\nFor example, if the input is "hello", the output should be:\nh\ne\nl\nl\no\n'
        },
        {
            name: "2B",
            due: "06/18/2023 11:59 PM",
            link: "https://www.gradescope.com/courses/545354/assignments/2936153",
            prompt: 'Write a program that reads in an integer and prints out whether it is "negative", "zero", or "positive".'
        },
        {
            name: "2C",
            due: "06/18/2023 11:59 PM",
            link: "https://www.gradescope.com/courses/545354/assignments/2936153",
            prompt: 'Write a program that reads in three numbers and prints "increasing" if they are in increasing order, "decreasing" if they are in decreasing order, and "neither" otherwise. \n\nHere, "increasing" means strictly increasing, with each value larger than its predecessor. Example: \n\ninput: 1 2 3\noutput: increasing\n\ninput: 3 2 1\noutput: decreasing\n\ninput: 3 4 4\noutput: neither'
        },
    ],
    [
        {
            name: "3A",
            due: "06/25/2023 11:59 PM",
            link: "https://www.gradescope.com/courses/545354/assignments/2945673",
            prompt: 'Write a function `string middle(string str)` that returns a string containing the middle character in str (if the length of str is odd), or the two middle characters (if the length of str is even). Example:\n\nstr = "hello"\nfunction returns "l"\n\nstr = "food"\nfunction returns "oo"'
        },
        {
            name: "3B",
            due: "06/25/2023 11:59 PM",
            link: "https://www.gradescope.com/courses/545354/assignments/2945681",
            prompt: 'Write a function `void sort2(int& a, int& b)` that swaps the values of a and b if a is greater than b. Otherwise a and b remain unchanged. Example: \n\nCode: `int x = 1; int y = 0; sort2(x,y);` \n\nResult: x is now 0 and y is now 1'
        },
        {
            name: "3C",
            due: "06/25/2023 11:59 PM",
            link: "https://www.gradescope.com/courses/545354/assignments/2945682",
            prompt: 'Write a function `void sort3(int& a, int& b, int& c)` that swaps its three arguments to arrange them in sorted order. Example:\n\nCode: `int x = 4; int y = 7; int z = 3; sort3(x,y,z);`\n\nResult: x is 3, y is 4, z is 7'
        },
    ],
    [
        {
            name: "4A",
            due: "07/02/2023 11:59 PM",
            link: "https://www.gradescope.com/courses/545354/assignments/2955038",
            prompt: 'Write a function `bool equals(int a[], int a_size, int b[], int b_size)` that checks whether two arrays have the same elements in the same order.\n\nExample: a = {1,2,3} , b = {1,2,3} => true\n\nExample: a = {4,5,6} , b = {4,5} => false\n\nExample: a = {90,80,100} , b = {1,2,3} => false'
        },
        {
            name: "4B",
            due: "07/02/2023 11:59 PM",
            link: "https://www.gradescope.com/courses/545354/assignments/2955065",
            prompt: 'Write a program that carries out the following tasks:\n\n- Open a file named hello.txt\n- Store the message "Hello, World!" in the file\n- Close the file\n- Open the same file again\n- Read the contents of the file into a string variable and print it'
        },
    ],
    [
        {
            name: "5A",
            due: "07/09/2023 11:59 PM",
            link: "https://www.gradescope.com/courses/545354/assignments/2963861",
            prompt:'Write a function `void sort2(double* p, double* q)` that receieves two pointers and sorts the values to which they point. If you call `sort2(&x, &y)` then x <= y after the call.\n\nExample: x = 7, y = 2; sort2(&x, &y) => x becomes 2, y becomes 7' 
        },
    ],
    [
        {
            name: "6A",
            due: "07/16/2023 11:59 PM",
            link: "https://www.gradescope.com/courses/545354/assignments/2970705",
            prompt:'Define a class Point. A Point has an x-coordinate value and a y-coordinate value. Write a function `double distance(Point a, Point b)` that computes the distance from a to b. Write a program that reads the coordinates of the points, calls your function, and displays the result.' 
        },
        {
            name: "6B",
            due: "07/16/2023 11:59 PM",
            link: "https://www.gradescope.com/courses/545354/assignments/2970706",
            prompt:'Define a class `Triangle` that contains three Point members from 6A. Write a function `double perimeter(Triangle t)` that computes the perimeter of a Triangle. Write a program that reads the coordinates of the points, calls your function, and displays the result.' 
        },
    ],
    [
        {
            name: "7A",
            due: "07/23/2023 11:59 PM",
            link: "https://www.gradescope.com/courses/545354/assignments/2977680",
            prompt:'Implement a class `Rectangle`. Provide a constructor to construct a rectangle with a given width and height, member functions `float get_perimeter()` and `float get_area()` that compute the perimeter and area, and a member function `void resize(double factor)` that resizes the rectangle by multiplying the width and the height by the given float `factor`.' 
        },
        {
            name: "7B",
            due: "07/23/2023 11:59 PM",
            link: "https://www.gradescope.com/courses/545354/assignments/2977681",
            prompt:'Write a function `vector<int> merge_sorted(vector<int> a, vector<int> b)` that merges two sorted vectors, producing a new sorted vector. Keep an index into each vector, indicating how much of it has been processed already. Each time, append the smallest unprocessed element from either vector, then advance the index.\n\nExample: if a is [1,4,9,16] and b is [4,7,9,9,11] then `merged_sorted` returns the vector [1,4,4,7,9,9,9,11,16]' 
        },
    ]
]
