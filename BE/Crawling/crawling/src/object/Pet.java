package object;

public class Pet {
    String petSno;
    String userSno;
    int targetNo;
    String name=".";
    String birth="2020-01-01";
    int fat;

    public String getPetSno() {
        return petSno;
    }

    public String getUserSno() {
        return userSno;
    }

    public int getTargetNo() {
        return targetNo;
    }

    public String getName() {
        return name;
    }

    public String getBirth() {
        return birth;
    }

    public int getFat() {
        return fat;
    }

    public Pet(String petSno, String userSno) {
        super();
        this.petSno = petSno;
        this.userSno = userSno;
        this.targetNo = (int)(Math.random()*7)+1;
        this.fat = (int)(Math.random()*5)+1;
    }

    @Override
    public String toString() {
        final StringBuilder sb = new StringBuilder("Pet{");
        sb.append(petSno);
        sb.append(", ").append(userSno);
        sb.append(", ").append(targetNo);
        sb.append(", ").append(name);
        sb.append(", ").append(birth);
        sb.append(", ").append(fat);
        sb.append("\n");
        return sb.toString();
    }
}


