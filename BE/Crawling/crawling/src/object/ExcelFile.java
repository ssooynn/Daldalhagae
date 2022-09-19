package object;

import org.apache.poi.xssf.usermodel.XSSFRow;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

import java.util.LinkedList;
import java.util.List;
import java.util.Map;

public class ExcelFile {
    int rowNo;
    String fileName;
    XSSFWorkbook WB;
    XSSFSheet sheet;
    XSSFRow titleRow;



    public int getRowNo() {
        return rowNo;
    }

    public void setRowNo(int rowNo) {
        this.rowNo = rowNo;
    }

    public String getFileName() {
        return fileName;
    }

    public void setFileName(String fileName) {
        this.fileName = fileName;
    }

    public XSSFWorkbook getWB() {
        return WB;
    }

    public void setWB(XSSFWorkbook WB) {
        this.WB = WB;
    }

    public XSSFSheet getSheet() {
        return sheet;
    }

    public void setSheet(XSSFSheet sheet) {
        this.sheet = sheet;
    }

    public XSSFRow getTitleRow() {
        return titleRow;
    }

    public void setTitleRow(XSSFRow titleRow) {
        this.titleRow = titleRow;
    }
    //사료&간식{"item_sno","name","image","particle_no","grade_no"}
    public void makeNewRow(Feed feed){
        XSSFRow newrow = sheet.createRow(rowNo++);
        newrow.createCell(0).setCellValue(feed.getSno());
        newrow.createCell(1).setCellValue(feed.getTitle());
        newrow.createCell(2).setCellValue(feed.getImage());
        newrow.createCell(3).setCellValue(feed.getParticleSize());
        newrow.createCell(4).setCellValue(feed.getGrade());
    }
    //리뷰 {"user_sno","purchase_no","pet_sno","item_sno","rate","content","image"}
    public void makeNewRow(Review review){
        XSSFRow newrow = sheet.createRow(rowNo++);
        newrow.createCell(0).setCellValue(review.getUserSno());
//        newrow.createCell(1).setCellValue(review.getPurchaseNo()); //null
        newrow.createCell(2).setCellValue(review.getPetSno());
        newrow.createCell(3).setCellValue(review.getItemSno());
        newrow.createCell(4).setCellValue(review.getRate());
        newrow.createCell(5).setCellValue(review.getContent());
        newrow.createCell(6).setCellValue(review.getImage());
    }
    //기능 {"effect_no","name"}
    public void makeNewRow(Map<String,Integer> map){


        List<Map.Entry<String, Integer>> entryList = new LinkedList<>(map.entrySet());
        entryList.sort((o1, o2) -> o1.getValue() - o2.getValue());
        for (Map.Entry<String, Integer> entry : entryList) {
            XSSFRow newrow = sheet.createRow(rowNo++);
            newrow.createCell(0).setCellValue(entry.getValue());
            newrow.createCell(1).setCellValue(entry.getKey());
        }


    }
    //중계테이블
    public void makeNewRow(List<Bridge> bridgeList){
        for(Bridge bridge : bridgeList){
            XSSFRow newrow = sheet.createRow(rowNo++);
            newrow.createCell(0).setCellValue(bridge.getFsno());
            newrow.createCell(1).setCellValue(bridge.getFk2());
        }


    }




    public ExcelFile(String fileName, String[] columns) {
        this.rowNo=0;
        this.fileName = fileName;
        this.WB=new XSSFWorkbook();
        this.sheet = WB.createSheet(fileName);

        this.titleRow = sheet.createRow(rowNo++); //타이틀 행 객체 추가
        int idx = 0;
        for (String column: columns){
            titleRow.createCell(idx++).setCellValue(column);
//            System.out.println(idx+"번 col");

        }

    }
}
