package com.simplilearn.demo.medical;
import java.nio.file.Path;
import java.nio.file.Paths;

public final class FileUtil {

  private FileUtil() {
    // restrict instantiation
  }

  public static final String folderPath =  "D:\\CapstoneProjects\\CAPSTONE PROJECT 2023\\Capstone Project- AdminPanel CRUD\\src\\assets\\";
  public static final Path filePath = Paths.get(folderPath);

}