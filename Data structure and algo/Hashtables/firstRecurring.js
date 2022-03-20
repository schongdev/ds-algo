# Online Python compiler (interpreter) to run Python online.
# Write Python 3 code in this online editor and run it.
def get_first_repeated(arr):
	'''
	O(n) time complexity
	O(n) space complexity
	'''
	# check inputs (is arr)

	first_repeated_no = None
	to_match = {}

	for i in range(0, len(arr)):
		# check if key is in dict
		if arr[i] in to_match:
			first_repeated_no = arr[i]
			return first_repeated_no
		else:
			to_match[arr[i]] = True

	return first_repeated_no
			  
def get_first_repeated_time_complex(arr):
	'''
	O(n^2) time complexity
	O(n) space complexity
	'''
	 #check inputs (is arr)

	first_repeated_no = None
		
	for i in range(0, len(arr)):
		for j in range(0, i):
			if arr[i] == arr[j]:
				first_repeated_no = arr[i]
				return first_repeated_no
				
			
	return first_repeated_no




arr = [0,2,2,1,3]
# print(get_first_repeated(arr))
print(get_first_repeated(arr))