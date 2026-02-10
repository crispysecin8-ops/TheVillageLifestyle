[New Text Document.txt](https://github.com/user-attachments/files/25209859/New.Text.Document.txt)
import java.util.*;


public class Shuffle_C {
    public static void main(String[] args) {
        int bee[]=new int[3];
        
        int count1, count2, count3, count4, count5,count6,j,i;
        count1=0;
        count2=0;
        count3=0;
        count4=0;
        count5=0;
        count6=0;

    for (i=0; i<6000;i ++){
        for (j=0; j<3;j++){
             Random rand=new Random();
             int randomNumber=rand.nextInt(3)+1;
             
             for (int k: bee){
                 if (k==randomNumber){
                     break;
                 }
             }
             bee[j]=randomNumber;
        }
       
        if (bee[0]==1 && bee[1]==2 && bee[2]==3){
            count1++;
        }else if (bee[0]==1 && bee[1]==3 && bee[2]==2){
            count2++;
        }
        else if (bee[0]==2&& bee[1]==1&& bee[2]==3){
            count3++;
        }
        else if (bee[0]==2&& bee[1]==3 && bee[2]==1){
            count4++;
        }
        else if (bee[0]==3 && bee[1]==1 && bee[2]==2){
            count5++;
        }
        else if (bee[0]==3 && bee[1]==2 && bee[2]==1){
            count6++;
        }
    }
    System.out.println("Count1="+count1);
    System.out.println("Count2="+count2);
    System.out.println("Count3="+count3);
    System.out.println("Count4="+count4);
    System.out.println("Count5="+count5);
    System.out.println("Count6="+count6);
        
        
        

    }
}
