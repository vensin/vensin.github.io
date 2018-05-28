package util;

import java.io.*;
import java.util.List;

public class ResponsityUtil {

//    public static List loadResponsity(String filePath){
//        List data = null;
//        try {
//            File file = new File(filePath);
//            if(!file.exists()){
//                file.createNewFile();
//                return null;
//            }
//            InputStream  in = new FileInputStream(file);
//            ObjectInputStream objIn =new ObjectInputStream(in);
//            data = (List) objIn.readObject();
//            objIn.close();
//            in.close();
//        } catch (Exception e) {
//            e.printStackTrace();
//        }
//        return data;
//    }
//
//    public static boolean writeResponsity(String filePath, Object object){
//        try {
//            File file = new File(filePath);
//            OutputStream  out = new FileOutputStream(file);
//            ObjectOutputStream objOut=new ObjectOutputStream(out);
//            objOut.writeObject(object);
//            objOut.flush();
//            objOut.close();
//            out.close();
//        } catch (IOException e) {
//            e.printStackTrace();
//            return false;
//        }
//
//        return true;
//    }
}
