/*Problem Statement
Given integers 
N and 
M, compute the sum 
k=0
∑
N
​
  
popcount
(k&M), modulo 
998244353.

Here, 
& represents the bitwise 
AND operation.

What is the bitwise 
AND operation?
What is 
popcount?
Constraints
N is an integer between 
0 and 
2 
60
 −1, inclusive.
M is an integer between 
0 and 
2 
60
 −1, inclusive.
Input
The input is given from Standard Input in the following format:
N 
M
Output
Print the answer as an integer.

Sample Input 1
4 3
Sample Output 1
4
popcount
(0&3)=0
popcount
(1&3)=1
popcount
(2&3)=1
popcount
(3&3)=2
popcount
(4&3)=0
The sum of these values is 
4.
*/
import java.util.Scanner;
public class D_Masked_Popcount {
    public static int countNoOfSetBits(int n) {
        int count = 0;
        for(int i=0; i<32; i++) {
            if((n&(1<<i))!=0) {
                count++;
            }
        }
        return count;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int N = sc.nextInt();
        int M = sc.nextInt();
        int sum = 0;
        for(int i=0; i<=N; i++) {
            int num = i&M;
            sum += countNoOfSetBits(num)%998244353;
        }
        System.out.println(sum%998244353);
    }
}