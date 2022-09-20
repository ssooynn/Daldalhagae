package object;

public class UserPetSno {
    String petSno;
    String userSno;

    public String getPetSno() {
        return petSno;
    }

    public void setPetSno(String petSno) {
        this.petSno = petSno;
    }

    public String getUserSno() {
        return userSno;
    }

    public void setUserSno(String userSno) {
        this.userSno = userSno;
    }

    public UserPetSno(String petSno, String userSno) {
        this.petSno = petSno;
        this.userSno = userSno;
    }

    public UserPetSno() {
    }
}
