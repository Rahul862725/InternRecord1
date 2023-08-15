
import java.util.*;

class java{

  static void add(List<Long>li){
	long sum=0;
	System.out.print("Sum is: "+li.stream().reduce(0L,(ans,el)->ans+el));
    
	}
  public static void main(String args[]){
   Scanner sc=new Scanner(System.in);
   long x=sc.nextLong();
   long y=sc.nextLong();

  List<Long>li=List.of(x,y);

 java.add(li);

}

}
