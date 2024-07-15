//package Cine_server.example.Cine_server.model;
//
//import jakarta.persistence.Entity;
//import jakarta.persistence.GeneratedValue;
//import jakarta.persistence.GenerationType;
//import jakarta.persistence.Id;
//
//import java.util.Date;
//
//@Entity
//public class Celebrity {
//
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private Long id;
//
//    private String originalName;
//    private String nickname;
//    private Date dateOfBirth;
//    private String fullName;
//    private String industry;
//    private String gender;
//    private String bornCountry;
//    private String bornState;
//    private String bornDistrict;
//    private String bornArea;
//    private String broughtUpCountry;
//    private String broughtUpState;
//    private String broughtUpDistrict;
//    private String broughtUpArea;
//    private String presentCountry;
//    private String presentState;
//    private String presentDistrict;
//    private String presentArea;
//    private String education;
//    private String specialty;
//    private String favorite;
//    private String favourites;
//    private Boolean alive;
//    private Date dateOfDeath;
//    private String familyRelation;
//    private String familyName;
//    private String familyRemarks;
//    private String socialMediaPlatform;
//    private String socialMediaLink;
//    private String caseName;
//    private String bio;
//    private String caseDescription;
//
//    public Long getId() {
//        return id;
//    }
//
//    public void setId(Long id) {
//        this.id = id;
//    }
//
//    public String getOriginalName() {
//        return originalName;
//    }
//
//    public void setOriginalName(String originalName) {
//        this.originalName = originalName;
//    }
//
//    public String getNickname() {
//        return nickname;
//    }
//
//    public void setNickname(String nickname) {
//        this.nickname = nickname;
//    }
//
//    public Date getDateOfBirth() {
//        return dateOfBirth;
//    }
//
//    public void setDateOfBirth(Date dateOfBirth) {
//        this.dateOfBirth = dateOfBirth;
//    }
//
//    public String getFullName() {
//        return fullName;
//    }
//
//    public void setFullName(String fullName) {
//        this.fullName = fullName;
//    }
//
//    public String getIndustry() {
//        return industry;
//    }
//
//    public void setIndustry(String industry) {
//        this.industry = industry;
//    }
//
//    public String getGender() {
//        return gender;
//    }
//
//    public void setGender(String gender) {
//        this.gender = gender;
//    }
//
//    public String getBornCountry() {
//        return bornCountry;
//    }
//
//    public void setBornCountry(String bornCountry) {
//        this.bornCountry = bornCountry;
//    }
//
//    public String getBornState() {
//        return bornState;
//    }
//
//    public void setBornState(String bornState) {
//        this.bornState = bornState;
//    }
//
//    public String getBornDistrict() {
//        return bornDistrict;
//    }
//
//    public void setBornDistrict(String bornDistrict) {
//        this.bornDistrict = bornDistrict;
//    }
//
//    public String getBornArea() {
//        return bornArea;
//    }
//
//    public void setBornArea(String bornArea) {
//        this.bornArea = bornArea;
//    }
//
//    public String getBroughtUpCountry() {
//        return broughtUpCountry;
//    }
//
//    public void setBroughtUpCountry(String broughtUpCountry) {
//        this.broughtUpCountry = broughtUpCountry;
//    }
//
//    public String getBroughtUpState() {
//        return broughtUpState;
//    }
//
//    public void setBroughtUpState(String broughtUpState) {
//        this.broughtUpState = broughtUpState;
//    }
//
//    public String getBroughtUpDistrict() {
//        return broughtUpDistrict;
//    }
//
//    public void setBroughtUpDistrict(String broughtUpDistrict) {
//        this.broughtUpDistrict = broughtUpDistrict;
//    }
//
//    public String getBroughtUpArea() {
//        return broughtUpArea;
//    }
//
//    public void setBroughtUpArea(String broughtUpArea) {
//        this.broughtUpArea = broughtUpArea;
//    }
//
//    public String getPresentCountry() {
//        return presentCountry;
//    }
//
//    public void setPresentCountry(String presentCountry) {
//        this.presentCountry = presentCountry;
//    }
//
//    public String getPresentState() {
//        return presentState;
//    }
//
//    public void setPresentState(String presentState) {
//        this.presentState = presentState;
//    }
//
//    public String getPresentDistrict() {
//        return presentDistrict;
//    }
//
//    public void setPresentDistrict(String presentDistrict) {
//        this.presentDistrict = presentDistrict;
//    }
//
//    public String getPresentArea() {
//        return presentArea;
//    }
//
//    public void setPresentArea(String presentArea) {
//        this.presentArea = presentArea;
//    }
//
//    public String getEducation() {
//        return education;
//    }
//
//    public void setEducation(String education) {
//        this.education = education;
//    }
//
//    public String getSpecialty() {
//        return specialty;
//    }
//
//    public void setSpecialty(String specialty) {
//        this.specialty = specialty;
//    }
//
//    public String getFavorite() {
//        return favorite;
//    }
//
//    public void setFavorite(String favorite) {
//        this.favorite = favorite;
//    }
//
//    public String getFavourites() {
//        return favourites;
//    }
//
//    public void setFavourites(String favourites) {
//        this.favourites = favourites;
//    }
//
//    public Boolean getAlive() {
//        return alive;
//    }
//
//    public void setAlive(Boolean alive) {
//        this.alive = alive;
//    }
//
//    public Date getDateOfDeath() {
//        return dateOfDeath;
//    }
//
//    public void setDateOfDeath(Date dateOfDeath) {
//        this.dateOfDeath = dateOfDeath;
//    }
//
//    public String getFamilyRelation() {
//        return familyRelation;
//    }
//
//    public void setFamilyRelation(String familyRelation) {
//        this.familyRelation = familyRelation;
//    }
//
//    public String getFamilyName() {
//        return familyName;
//    }
//
//    public void setFamilyName(String familyName) {
//        this.familyName = familyName;
//    }
//
//    public String getFamilyRemarks() {
//        return familyRemarks;
//    }
//
//    public void setFamilyRemarks(String familyRemarks) {
//        this.familyRemarks = familyRemarks;
//    }
//
//    public String getSocialMediaPlatform() {
//        return socialMediaPlatform;
//    }
//
//    public void setSocialMediaPlatform(String socialMediaPlatform) {
//        this.socialMediaPlatform = socialMediaPlatform;
//    }
//
//    public String getSocialMediaLink() {
//        return socialMediaLink;
//    }
//
//    public void setSocialMediaLink(String socialMediaLink) {
//        this.socialMediaLink = socialMediaLink;
//    }
//
//    public String getCaseName() {
//        return caseName;
//    }
//
//    public void setCaseName(String caseName) {
//        this.caseName = caseName;
//    }
//
//    public String getBio() {
//        return bio;
//    }
//
//    public void setBio(String bio) {
//        this.bio = bio;
//    }
//
//    public String getCaseDescription() {
//        return caseDescription;
//    }
//
//    public void setCaseDescription(String caseDescription) {
//        this.caseDescription = caseDescription;
//    }
//
//    public Celebrity(Long id, String originalName, String nickname, Date dateOfBirth, String fullName, String industry, String gender, String bornCountry, String bornState, String bornDistrict, String bornArea, String broughtUpCountry, String broughtUpState, String broughtUpDistrict, String broughtUpArea, String presentCountry, String presentState, String presentDistrict, String presentArea, String education, String specialty, String favorite, String favourites, Boolean alive, Date dateOfDeath, String familyRelation, String familyName, String familyRemarks, String socialMediaPlatform, String socialMediaLink, String caseName, String bio, String caseDescription) {
//        this.id = id;
//        this.originalName = originalName;
//        this.nickname = nickname;
//        this.dateOfBirth = dateOfBirth;
//        this.fullName = fullName;
//        this.industry = industry;
//        this.gender = gender;
//        this.bornCountry = bornCountry;
//        this.bornState = bornState;
//        this.bornDistrict = bornDistrict;
//        this.bornArea = bornArea;
//        this.broughtUpCountry = broughtUpCountry;
//        this.broughtUpState = broughtUpState;
//        this.broughtUpDistrict = broughtUpDistrict;
//        this.broughtUpArea = broughtUpArea;
//        this.presentCountry = presentCountry;
//        this.presentState = presentState;
//        this.presentDistrict = presentDistrict;
//        this.presentArea = presentArea;
//        this.education = education;
//        this.specialty = specialty;
//        this.favorite = favorite;
//        this.favourites = favourites;
//        this.alive = alive;
//        this.dateOfDeath = dateOfDeath;
//        this.familyRelation = familyRelation;
//        this.familyName = familyName;
//        this.familyRemarks = familyRemarks;
//        this.socialMediaPlatform = socialMediaPlatform;
//        this.socialMediaLink = socialMediaLink;
//        this.caseName = caseName;
//        this.bio = bio;
//        this.caseDescription = caseDescription;
//    }
//
//    public Celebrity() {
//    }
//
//
//    @Override
//    public String toString() {
//        return "Celebrity{" +
//                "id=" + id +
//                ", originalName='" + originalName + '\'' +
//                ", nickname='" + nickname + '\'' +
//                ", dateOfBirth=" + dateOfBirth +
//                ", fullName='" + fullName + '\'' +
//                ", industry='" + industry + '\'' +
//                ", gender='" + gender + '\'' +
//                ", bornCountry='" + bornCountry + '\'' +
//                ", bornState='" + bornState + '\'' +
//                ", bornDistrict='" + bornDistrict + '\'' +
//                ", bornArea='" + bornArea + '\'' +
//                ", broughtUpCountry='" + broughtUpCountry + '\'' +
//                ", broughtUpState='" + broughtUpState + '\'' +
//                ", broughtUpDistrict='" + broughtUpDistrict + '\'' +
//                ", broughtUpArea='" + broughtUpArea + '\'' +
//                ", presentCountry='" + presentCountry + '\'' +
//                ", presentState='" + presentState + '\'' +
//                ", presentDistrict='" + presentDistrict + '\'' +
//                ", presentArea='" + presentArea + '\'' +
//                ", education='" + education + '\'' +
//                ", specialty='" + specialty + '\'' +
//                ", favorite='" + favorite + '\'' +
//                ", favourites='" + favourites + '\'' +
//                ", alive=" + alive +
//                ", dateOfDeath=" + dateOfDeath +
//                ", familyRelation='" + familyRelation + '\'' +
//                ", familyName='" + familyName + '\'' +
//                ", familyRemarks='" + familyRemarks + '\'' +
//                ", socialMediaPlatform='" + socialMediaPlatform + '\'' +
//                ", socialMediaLink='" + socialMediaLink + '\'' +
//                ", caseName='" + caseName + '\'' +
//                ", bio='" + bio + '\'' +
//                ", caseDescription='" + caseDescription + '\'' +
//                '}';
//    }
//
//
//    // Getters and setters (omitted for brevity, generate using your IDE)
//
//}
