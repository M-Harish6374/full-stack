import java.util.*;

class Hello{
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        int a = sc.nextInt();
        int m=a/2;
        int flag = 0;
        if(a==0||a==1){
            System.out.print("Not a prime number");
        }
        else{
            for(int i=2;i<=m;i++){
                if(a%i==0){
                    System.out.print("Not a prime number");
                    flag=1
                    break;
                }
                else{
                    flag=0;
                }
                
            }
            if(flag == 0){
                System.out.print("Prime number");

            }
            else{
                System.out.print("Not a prime");
            }
        }
    }
}