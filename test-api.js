

const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[36m',
};

async function testEndpoint(name, method, endpoint, body = null) {
  console.log(`\n${colors.blue}Testing: ${name}${colors.reset}`);
  console.log(`${method} ${API_BASE_URL}${endpoint}`);
  
  if (body) {
    console.log(`Request: ${JSON.stringify(body)}`);
  }
  
  try {
    const options = {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
    };
    
    if (body) {
      options.body = JSON.stringify(body);
    }
    
    const response = await fetch(`${API_BASE_URL}${endpoint}`, options);
    const data = await response.json();
    
    console.log(`Status: ${response.status}`);
    console.log(`Response: ${JSON.stringify(data, null, 2)}`);
    
    if (data.is_success) {
      console.log(`${colors.green}✓ PASSED${colors.reset}`);
    } else {
      console.log(`${colors.red}✗ FAILED${colors.reset}`);
    }
  } catch (error) {
    console.log(`${colors.red}✗ ERROR: ${error.message}${colors.reset}`);
  }
}

async function runAllTests() {
  console.log(`${colors.yellow}===========================================`);
  console.log(`BFHL API Test Suite`);
  console.log(`Testing: ${API_BASE_URL}`);
  console.log(`===========================================${colors.reset}`);
  
  // Test 1: Health Check
  await testEndpoint('Health Check', 'GET', '/health');
  
  // Test 2: Fibonacci
  await testEndpoint('Fibonacci (n=7)', 'POST', '/bfhl', { fibonacci: 7 });
  
  // Test 3: Prime
  await testEndpoint('Prime Numbers', 'POST', '/bfhl', { prime: [2, 4, 7, 9, 11] });
  
  // Test 4: LCM
  await testEndpoint('LCM Calculation', 'POST', '/bfhl', { lcm: [12, 18, 24] });
  
  // Test 5: HCF
  await testEndpoint('HCF Calculation', 'POST', '/bfhl', { hcf: [24, 36, 60] });
  
  // Test 6: AI
  await testEndpoint('AI Question', 'POST', '/bfhl', { AI: 'What is the capital city of Maharashtra?' });
  
  console.log(`\n${colors.yellow}===========================================${colors.reset}`);
  console.log(`${colors.green}All tests completed!${colors.reset}`);
  console.log(`${colors.yellow}===========================================${colors.reset}\n`);
}

runAllTests();
