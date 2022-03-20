# Online Python compiler (interpreter) to run Python online.
# Write Python 3 code in this online editor and run it.

def merge_sorted_array(arr1, arr2):

	# Check  inputs (not done)

	merged_sorted_array = []

	arr1_counter = 0
	arr2_counter = 0

	while arr1_counter < len(arr1) and arr2_counter < len(arr2):
		if arr1[arr1_counter] < arr2[arr2_counter]:
			merged_sorted_array.append(arr1[arr1_counter])
			arr1_counter += 1
		else:
			merged_sorted_array.append(arr2[arr2_counter])
			arr2_counter += 1
	
	for i in range(arr1_counter, len(arr1)):
		merged_sorted_array.append(arr1[i])
	for i in range(arr2_counter, len(arr2)):
		merged_sorted_array.append(arr2[i])
			
	return merged_sorted_array
	
def merge_sorted_array2(arr1, arr2):

	# Check  inputs (not done)
	
	
	merged_sorted_array = []

	arr1_counter = 0
	arr2_counter = 0

	# Traverse through both dynamic list consecutively and add to merged list
	while arr1_counter < len(arr1) and arr2_counter < len(arr2):
		if arr1[arr1_counter] < arr2[arr2_counter]:
			merged_sorted_array.append(arr1[arr1_counter])
			arr1_counter += 1
		elif arr1[arr1_counter] > arr2[arr2_counter]:
			merged_sorted_array.append(arr2[arr2_counter])
			arr2_counter += 1
		else:
			merged_sorted_array.append(arr1[arr1_counter])
			arr1_counter += 1
			arr2_counter += 1
	
	# If there are any remaining,  dump remaining elements to merged list
	for i in range(arr1_counter, len(arr1)):
		merged_sorted_array.append(arr1[i])
	for i in range(arr2_counter, len(arr2)):
		merged_sorted_array.append(arr2[i])
			
	return merged_sorted_array


arr1 = [0,3,4,31,33]
arr2 = [4,6,30]

print(merge_sorted_array(arr1, arr2))