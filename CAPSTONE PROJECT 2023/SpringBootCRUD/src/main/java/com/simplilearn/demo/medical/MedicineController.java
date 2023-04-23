package com.simplilearn.demo.medical;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;


@CrossOrigin("http://localhost:4200/")
@RestController
@RequestMapping("/api/mymedicine")
public class MedicineController {
	
	
	@Autowired
	private MedService service;
	
	  
	@PostMapping(value="/", consumes = {MediaType.MULTIPART_FORM_DATA_VALUE})
	public ResponseEntity<Object> uploadFiles(@RequestParam("files") MultipartFile files,@RequestParam("name") String name,@RequestParam("category") String category,@RequestParam("description") String description,@RequestParam("price") int price) {
        try {
            createDirIfNotExist();

            List<String> fileNames = new ArrayList<>();

            // read and write the file to the local folder
            Arrays.asList(files).stream().forEach(file -> {
                byte[] bytes = new byte[0];
                try {
                    bytes = file.getBytes();
                    Path path=Paths.get(FileUtil.folderPath + name.toLowerCase()+".png");
                    Files.write(path, bytes);
                    fileNames.add(path.toString());
                } catch (IOException e) {
                	e.printStackTrace();
                }
            });
            
            System.out.println(name+","+category+","+description+","+price);
            
            Medicine med=new Medicine(name,description,category,price);
            med.setPhoto(fileNames.get(0));
            service.addMed(med);
            return new ResponseEntity<Object>(med,HttpStatus.OK);

        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body("Exception to upload files!");
        }
    }

    /**
     * Create directory to save files, if not exist
     */
	
	 
	
    private void createDirIfNotExist() {
        //create directory to save the files
        File directory = new File(FileUtil.folderPath);
        if (! directory.exists()){
            directory.mkdir();
        }
    }
	
	 
	
	@GetMapping("/")
	public List<Medicine> getAllMed(){
		return service.getAllMed();
	}
	 
	
	@GetMapping("/{id}")
	public ResponseEntity<Medicine>getMedById (@PathVariable int id){
		Medicine medicine= service.getMedById(id);
		
		if(medicine!=null)
			return new ResponseEntity<Medicine>(medicine, HttpStatus.OK);
		else
			return new ResponseEntity<Medicine>(medicine, HttpStatus.NOT_FOUND);
	}
	@PutMapping("/{id}")
	public ResponseEntity<Object> updateMed(@PathVariable int id,@RequestBody Medicine newMed){
		Medicine Medicine= service.updateMed(id, newMed);
		
		if (Medicine!=null)
			return new ResponseEntity<Object>(Medicine,HttpStatus.OK);
		else
			return new ResponseEntity<Object>("No User Available to Update",HttpStatus.NOT_FOUND);
	}
	
	 
	
	 
	 
	
	@DeleteMapping("/{id}")
	public ResponseEntity<String>deleteUser(@PathVariable int id){
		boolean result = service.deleteMedicine(id);
		if(result) 
			return new ResponseEntity<String>("Object Deleted",HttpStatus.OK);
		else
			return new ResponseEntity<String>("NO user Found", HttpStatus.NOT_FOUND);
		
	}
 
}
