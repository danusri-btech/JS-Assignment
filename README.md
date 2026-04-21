# JS-Assignment

## Question 1: Digit Gatekeeper
Approach:
- Loop from L to R
- Check divisibility by K
- Skip numbers containing 0
- Find sum of digits
- Check if sum is prime

Time Complexity: O(N * D)



## Question 2: Roll-Seed Lock
Approach:
- Start with N
- Repeat 3 times:
  - If even → divide by 2 and add seed
  - If odd → multiply by 3 and subtract seed
- Check if result is 3-digit
- Check middle digit

Time Complexity: O(1)



## Question 3: Mirror Corridor
Approach:
- Try all X from 0 to 100000
- Check if (N + X) is palindrome
- Check divisibility by K
- Return first valid X

Time Complexity: O(100000 * D)



## Question 4: Fare Calculator
Approach:
- Calculate base fare
- Add extra charges based on conditions
- Apply seed rule
- Round to nearest multiple of 5

Time Complexity: O(1)



## Question 5: Skipping Numbers
Approach:
- Start from 1 and keep adding numbers
- Skip numbers divisible by (seed + 2)
- Stop when sum ≥ N

Time Complexity: O(N)



## Question 6: Contest Score Judge
Approach:
- Calculate score using formula
- Adjust negative score
- Apply penalty if needed
- Decide PASS/FAIL

Time Complexity: O(1)
