function indexOfIgnoreCase(s1, s2) {
  // write your code here
	let idx=0;
	let idx1=0;
	s1=s1.toLowerCase();
	s2=s2.toUpperCase();
	while(idx<s1.length()){
		if(s1[idx]==s2[idx1]){
			return idx;
		}
		idx++;
		
	}
	return -1;
}

// Please do not change the code below
//const s1 = prompt("Enter s1:");
//const s2 = prompt("Enter s2:");
//alert(indexOfIgnoreCase(s1, s2));
