# Online Python compiler (interpreter) to run Python online.
# Write Python 3 code in this online editor and run it.
house_raw = [[0,0,0,1],[0,1,0,0],[0,0,1,0],[1,0,0,0],[0,0,0,0]]
K=4

def convert_house_to_coord(house_raw):
    house_coord_list = []
    
    i = 0
    for i in range(0 ,len(house_raw)):
        j = 0
        for j in range(0, len(house_raw[i])):
            if(house_raw[i][j] == 1):
                house_coord_list.append((i+1,j+1))
            j = j + 1
        i = i + 1
        
    return house_coord_list


def get_land_coord(house_raw):
    x = len(house_raw)
    y = len(house_raw[0])
    return (x,y)
    
house_coord_list = convert_house_to_coord(house_raw)
x_max,y_max = get_land_coord(house_raw)
store_coord_list = []

for x in range(1,x_max+1):
    for y in range(1, y_max+1):
        for house_coord_no in range(0,len(house_coord_list)):
            house_coord_x, house_coord_y = house_coord_list[house_coord_no]

            x_diff = abs(house_coord_x-x)
            y_diff = abs(house_coord_y-y)
            total_dist = x_diff + y_diff
            if total_dist > K or total_dist == 0:
                break
            # print(total_dist)
            if house_coord_no == (len(house_coord_list) -1):
                store_coord_list.append((x,y))
# all coordinates of stores
print(store_coord_list)
# no of stores
print(len(store_coord_list))