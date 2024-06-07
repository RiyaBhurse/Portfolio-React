import java.util.Scanner;
public class B_Nutrients {
    public static void main(String[] args) {
        java.util.Scanner sc = new java.util.Scanner(System.in);
        int N = sc.nextInt();
        int M = sc.nextInt();
        int[] A = new int[M];
        for(int i=0; i<M; i++) {
            A[i] = sc.nextInt();
        }
        int[][] X = new int[N][M];
        for(int i=0; i<N; i++) {
            for(int j=0; j<M; j++) {
                X[i][j] = sc.nextInt();
            }
        }
        boolean flag = true;
        for(int i=0; i<M; i++) {
            int sum = 0;
            for(int j=0; j<N; j++) {
                sum +=X[j][i];
            }
            if(A[i]>sum) {
                flag = false;
                System.out.println("No");
                return;
            }
        }
        if (flag) {
            System.out.println("Yes");          
        }
    }
}