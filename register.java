import org.springframework.web.bind.annotation.*;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import javax.sql.DataSource;

@RestController
public class RegistrationController {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody RegistrationRequest request) {
        String username = request.getUsername();
        String password = request.getPassword();
        String confirmPassword = request.getConfirmPassword();
        String email = request.getEmail();

        if (username == null || password == null || confirmPassword == null || email == null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Vui lòng điền đầy đủ thông tin!");
        }

        if (!password.equals(confirmPassword)) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Mật khẩu xác nhận không khớp!");
        }

        try {
            jdbcTemplate.update("INSERT INTO wait (full_name, user_name, password, email) VALUES (?, ?, ?, ?)",
                                request.getFullName(), username, password, email);
            return ResponseEntity.status(HttpStatus.CREATED).body("Đăng ký thành công. Vui lòng đợi admin phê duyệt tài khoản của bạn.");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Có lỗi xảy ra khi đăng ký!");
        }
    }

    @GetMapping("/success")
    public ResponseEntity<?> success() {
        return ResponseEntity.ok("Đăng ký thành công!");
    }
}

class RegistrationRequest {
    private String fullName;
    private String username;
    private String password;
    private String confirmPassword;
    private String email;

    // Getters and setters
}
