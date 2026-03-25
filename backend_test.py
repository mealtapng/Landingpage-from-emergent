import requests
import sys
import json
from datetime import datetime

class MealtapAPITester:
    def __init__(self, base_url="https://lagos-hero-pitch.preview.emergentagent.com"):
        self.base_url = base_url
        self.api_url = f"{base_url}/api"
        self.tests_run = 0
        self.tests_passed = 0
        self.test_results = []

    def log_test(self, name, success, details=""):
        """Log test result"""
        self.tests_run += 1
        if success:
            self.tests_passed += 1
            print(f"✅ {name} - PASSED")
        else:
            print(f"❌ {name} - FAILED: {details}")
        
        self.test_results.append({
            "test": name,
            "success": success,
            "details": details
        })

    def test_api_root(self):
        """Test API root endpoint"""
        try:
            response = requests.get(f"{self.api_url}/", timeout=10)
            success = response.status_code == 200
            details = f"Status: {response.status_code}"
            if success:
                data = response.json()
                details += f", Response: {data}"
            self.log_test("API Root", success, details)
            return success
        except Exception as e:
            self.log_test("API Root", False, str(e))
            return False

    def test_status_endpoints(self):
        """Test status check endpoints"""
        # Test POST status
        try:
            test_data = {"client_name": f"test_client_{datetime.now().strftime('%H%M%S')}"}
            response = requests.post(f"{self.api_url}/status", json=test_data, timeout=10)
            success = response.status_code == 200
            details = f"POST Status: {response.status_code}"
            if success:
                data = response.json()
                details += f", ID: {data.get('id', 'N/A')}"
            self.log_test("POST Status Check", success, details)
        except Exception as e:
            self.log_test("POST Status Check", False, str(e))

        # Test GET status
        try:
            response = requests.get(f"{self.api_url}/status", timeout=10)
            success = response.status_code == 200
            details = f"GET Status: {response.status_code}"
            if success:
                data = response.json()
                details += f", Count: {len(data)}"
            self.log_test("GET Status Checks", success, details)
        except Exception as e:
            self.log_test("GET Status Checks", False, str(e))

    def test_pitch_deck_endpoints(self):
        """Test pitch deck request endpoints"""
        # Test POST pitch deck request
        try:
            test_data = {
                "full_name": "Test User",
                "email": f"test_{datetime.now().strftime('%H%M%S')}@example.com",
                "phone": "+2348012345678",
                "organisation": "Test Company",
                "role_title": "CEO",
                "request_reason": "investor",
                "more_about_interest": "Testing the API functionality",
                "heard_about": "social_media"
            }
            response = requests.post(f"{self.api_url}/pitch-deck-request", json=test_data, timeout=10)
            success = response.status_code == 200
            details = f"POST Pitch Deck: {response.status_code}"
            if success:
                data = response.json()
                details += f", ID: {data.get('id', 'N/A')}"
            self.log_test("POST Pitch Deck Request", success, details)
        except Exception as e:
            self.log_test("POST Pitch Deck Request", False, str(e))

        # Test GET pitch deck requests
        try:
            response = requests.get(f"{self.api_url}/pitch-deck-requests", timeout=10)
            success = response.status_code == 200
            details = f"GET Pitch Deck: {response.status_code}"
            if success:
                data = response.json()
                details += f", Count: {len(data)}"
            self.log_test("GET Pitch Deck Requests", success, details)
        except Exception as e:
            self.log_test("GET Pitch Deck Requests", False, str(e))

    def test_waitlist_endpoints(self):
        """Test waitlist request endpoints"""
        # Test POST waitlist request
        try:
            test_data = {
                "full_name": "Test Waitlist User",
                "email": f"waitlist_{datetime.now().strftime('%H%M%S')}@example.com",
                "phone": "+2348087654321",
                "company": "Test Waitlist Company",
                "why_mealtap": "Testing the waitlist API functionality"
            }
            response = requests.post(f"{self.api_url}/waitlist-request", json=test_data, timeout=10)
            success = response.status_code == 200
            details = f"POST Waitlist: {response.status_code}"
            if success:
                data = response.json()
                details += f", ID: {data.get('id', 'N/A')}"
            self.log_test("POST Waitlist Request", success, details)
        except Exception as e:
            self.log_test("POST Waitlist Request", False, str(e))

        # Test GET waitlist requests
        try:
            response = requests.get(f"{self.api_url}/waitlist-requests", timeout=10)
            success = response.status_code == 200
            details = f"GET Waitlist: {response.status_code}"
            if success:
                data = response.json()
                details += f", Count: {len(data)}"
            self.log_test("GET Waitlist Requests", success, details)
        except Exception as e:
            self.log_test("GET Waitlist Requests", False, str(e))

    def test_form_validation(self):
        """Test form validation with missing required fields"""
        # Test pitch deck with missing required fields
        try:
            incomplete_data = {
                "full_name": "Test User",
                # Missing email, request_reason, more_about_interest
            }
            response = requests.post(f"{self.api_url}/pitch-deck-request", json=incomplete_data, timeout=10)
            # Should return 422 for validation error
            success = response.status_code == 422
            details = f"Validation test: {response.status_code}"
            self.log_test("Pitch Deck Validation", success, details)
        except Exception as e:
            self.log_test("Pitch Deck Validation", False, str(e))

        # Test waitlist with missing required fields
        try:
            incomplete_data = {
                "full_name": "Test User",
                # Missing email, phone, why_mealtap
            }
            response = requests.post(f"{self.api_url}/waitlist-request", json=incomplete_data, timeout=10)
            # Should return 422 for validation error
            success = response.status_code == 422
            details = f"Validation test: {response.status_code}"
            self.log_test("Waitlist Validation", success, details)
        except Exception as e:
            self.log_test("Waitlist Validation", False, str(e))

    def run_all_tests(self):
        """Run all backend API tests"""
        print(f"🚀 Starting Mealtap API Tests")
        print(f"📍 Base URL: {self.base_url}")
        print("=" * 50)

        # Test API connectivity first
        if not self.test_api_root():
            print("❌ API is not accessible. Stopping tests.")
            return False

        # Run all endpoint tests
        self.test_status_endpoints()
        self.test_pitch_deck_endpoints()
        self.test_waitlist_endpoints()
        self.test_form_validation()

        # Print summary
        print("=" * 50)
        print(f"📊 Test Summary: {self.tests_passed}/{self.tests_run} tests passed")
        
        if self.tests_passed == self.tests_run:
            print("🎉 All tests passed!")
            return True
        else:
            print(f"⚠️  {self.tests_run - self.tests_passed} tests failed")
            return False

def main():
    tester = MealtapAPITester()
    success = tester.run_all_tests()
    return 0 if success else 1

if __name__ == "__main__":
    sys.exit(main())