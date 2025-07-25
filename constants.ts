import { LayerData, ImageUrls } from './types';

export const MAP_DIMENSIONS = {
  width: 4001,
  height: 2250,
};

export const HOVER_SOUND_URL = 'https://res.cloudinary.com/dukaroz3u/video/upload/v1752944346/click-button-131479_glstzg.mp3';

export const BACKGROUND_COLOR = '#177b61';

export const NON_INTERACTIVE_LAYER_NAMES: string[] = [
    'BG',
    'Surface',
    'Walkway',
    'Roads buggy',
    'Tree copy 56',
    'Map Ledgend',
    'Entrance',
];

export const BUILDING_LAYER_NAMES: string[] = [
  'Male Staff Quarters', 'Terrace', 'Gym', 'Dream villa',
  'Grand hall', 'Prayer room', 'Big Kitchen', 'Garden restaurant', 'Spice Restaurant',
  'New Kitchen', 'Split ', 'Store', 'Generator', 'owners cabin', 'Billiard Room',
  'Duplex Villa', 'Eco Cabin', 'Mud House', 'Mid House 2', 'Water villas',
  'Tower Building', 'Green Cabins', 'Laundry', 'Cow Farm', 'Female Staff Quarters',
  'Hatchery', 'Reception', 'Twin Cabin', 'Dream House'
];

export const OTHER_FEATURES_LAYER_NAMES: string[] = [
  'Big Pools Area', 'Small Swimming', 'Boats', 'Cricket Field', 'Kids playground', 
  'Amphi theatre', 'Agri  fields', 'Agri  field 2', 'Agri  field 3', 'Football Field',
  'Parrking', 'Cycle'
];

export const TOGGLEABLE_LAYERS: { [key: string]: string } = {
  'Buildings': 'Buildings',
  'Features': 'Features',
  'Paths': 'Walkway',
  'Roads': 'Roads buggy'
};

export const CLOUDS_CONFIG = [
  { id: 1, src: 'https://res.cloudinary.com/dy80ftu9k/image/upload/v1753017621/Cloud_PNG_Clip_Art_Image-1171819204_touawb.png', x: 500, y: 200, width: 800, height: 400, opacity: 0.8, duration: 120 },
  { id: 2, src: 'https://res.cloudinary.com/dy80ftu9k/image/upload/v1753017610/Cloud-PNG-Cutout-Architecture-Photoshop_01_iucmoe.png', x: 1800, y: 800, width: 1000, height: 500, opacity: 0.9, duration: 90 },
  { id: 3, src: 'https://res.cloudinary.com/dy80ftu9k/image/upload/v1753017621/Cloud_PNG_Clip_Art_Image-1171819204_touawb.png', x: 3000, y: 500, width: 900, height: 450, opacity: 0.85, duration: 150 },
  { id: 4, src: 'https://res.cloudinary.com/dy80ftu9k/image/upload/v1753017610/Cloud-PNG-Cutout-Architecture-Photoshop_01_iucmoe.png', x: 4200, y: 1200, width: 700, height: 350, opacity: 0.75, duration: 100 },
  { id: 5, src: 'https://res.cloudinary.com/dy80ftu9k/image/upload/v1753017621/Cloud_PNG_Clip_Art_Image-1171819204_touawb.png', x: 6000, y: 300, width: 1200, height: 600, opacity: 0.9, duration: 180 },
  { id: 6, src: 'https://res.cloudinary.com/dy80ftu9k/image/upload/v1753017610/Cloud-PNG-Cutout-Architecture-Photoshop_01_iucmoe.png', x: 800, y: 1300, width: 800, height: 400, opacity: 0.8, duration: 130 },
  { id: 7, src: 'https://res.cloudinary.com/dy80ftu9k/image/upload/v1753017621/Cloud_PNG_Clip_Art_Image-1171819204_touawb.png', x: 2500, y: 1500, width: 700, height: 350, opacity: 0.75, duration: 160 },
  { id: 8, src: 'https://res.cloudinary.com/dy80ftu9k/image/upload/v1753017610/Cloud-PNG-Cutout-Architecture-Photoshop_01_iucmoe.png', x: 5500, y: 900, width: 900, height: 450, opacity: 0.85, duration: 110 },
  { id: 9, src: 'https://res.cloudinary.com/dy80ftu9k/image/upload/v1753017621/Cloud_PNG_Clip_Art_Image-1171819204_touawb.png', x: 1500, y: 100, width: 800, height: 400, opacity: 0.8, duration: 140 },
  { id: 10, src: 'https://res.cloudinary.com/dy80ftu9k/image/upload/v1753017610/Cloud-PNG-Cutout-Architecture-Photoshop_01_iucmoe.png', x: 3500, y: 1000, width: 1000, height: 500, opacity: 0.9, duration: 105 },
  { id: 11, src: 'https://res.cloudinary.com/dy80ftu9k/image/upload/v1753017621/Cloud_PNG_Clip_Art_Image-1171819204_touawb.png', x: 4800, y: 1600, width: 700, height: 350, opacity: 0.75, duration: 170 },
  { id: 12, src: 'https://res.cloudinary.com/dy80ftu9k/image/upload/v1753017610/Cloud-PNG-Cutout-Architecture-Photoshop_01_iucmoe.png', x: 100, y: 100, width: 600, height: 300, opacity: 0.8, duration: 200 },
  { id: 13, src: 'https://res.cloudinary.com/dy80ftu9k/image/upload/v1753017621/Cloud_PNG_Clip_Art_Image-1171819204_touawb.png', x: 1200, y: 1400, width: 900, height: 450, opacity: 0.85, duration: 220 },
  { id: 14, src: 'https://res.cloudinary.com/dy80ftu9k/image/upload/v1753017610/Cloud-PNG-Cutout-Architecture-Photoshop_01_iucmoe.png', x: 2800, y: 100, width: 700, height: 350, opacity: 0.75, duration: 190 },
  { id: 15, src: 'https://res.cloudinary.com/dy80ftu9k/image/upload/v1753017621/Cloud_PNG_Clip_Art_Image-1171819204_touawb.png', x: 3800, y: 1800, width: 800, height: 400, opacity: 0.9, duration: 250 },
  { id: 16, src: 'https://res.cloudinary.com/dy80ftu9k/image/upload/v1753017610/Cloud-PNG-Cutout-Architecture-Photoshop_01_iucmoe.png', x: 5000, y: 700, width: 1100, height: 550, opacity: 0.8, duration: 210 },
];

export const LAYER_DATA: LayerData[] = [
  { "index": 0, "name": "BG", "filename": "0_BG.png", "x": 0, "y": 0, "width": 4001, "height": 2250, "opacity": 255 },
  { "index": 1, "name": "Surface", "filename": "1_Surface.png", "x": 634, "y": 0, "width": 3367, "height": 2250, "opacity": 255 },
  { "index": 2, "name": "Male Staff Quarters", "filename": "2_Male_Staff_Quarters.png", "x": 2375, "y": 1275, "width": 195, "height": 114, "opacity": 255 },
  { "index": 3, "name": "Walkway", "filename": "3_Walkway.png", "x": 1680, "y": 550, "width": 721, "height": 1326, "opacity": 255 },
  { "index": 4, "name": "Roads buggy", "filename": "4_Roads_buggy.png", "x": 1397, "y": 236, "width": 1374, "height": 1689, "opacity": 255 },
  { "index": 5, "name": "Terrace", "filename": "5_Terrace.png", "x": 1766, "y": 1233, "width": 77, "height": 77, "opacity": 255 },
  { "index": 6, "name": "Big Pools Area", "filename": "6_Big_Pools_Area.png", "x": 2030, "y": 294, "width": 219, "height": 237, "opacity": 255 },
  { "index": 7, "name": "Gym", "filename": "7_Gym.png", "x": 2013, "y": 193, "width": 225, "height": 145, "opacity": 255 },
  { "index": 8, "name": "Dream villa", "filename": "8_Dream_villa.png", "x": 2239, "y": 179, "width": 170, "height": 158, "opacity": 255 },
  { "index": 9, "name": "Grand hall", "filename": "9_Grand_hall.png", "x": 2474, "y": 190, "width": 172, "height": 130, "opacity": 255 },
  { "index": 10, "name": "Prayer room", "filename": "10_Prayer_room.png", "x": 1964, "y": 1259, "width": 108, "height": 92, "opacity": 255 },
  { "index": 11, "name": "Big Kitchen", "filename": "11_Big_Kitchen.png", "x": 1896, "y": 1039, "width": 98, "height": 89, "opacity": 255 },
  { "index": 12, "name": "Garden restaurant", "filename": "12_Garden_restaurant.png", "x": 1940, "y": 1087, "width": 122, "height": 94, "opacity": 255 },
  { "index": 13, "name": "Spice Restaurant", "filename": "13_Spice_Restaurant.png", "x": 1918, "y": 1211, "width": 122, "height": 79, "opacity": 255 },
  { "index": 14, "name": "New Kitchen", "filename": "14_New_Kitchen.png", "x": 1872, "y": 1247, "width": 103, "height": 78, "opacity": 255 },
  { "index": 15, "name": "Split ", "filename": "15_Split_.png", "x": 1794, "y": 1280, "width": 100, "height": 94, "opacity": 255 },
  { "index": 16, "name": "Store", "filename": "16_Store.png", "x": 1908, "y": 1295, "width": 96, "height": 95, "opacity": 255 },
  { "index": 17, "name": "Generator", "filename": "17_Generator.png", "x": 1839, "y": 1333, "width": 96, "height": 77, "opacity": 255 },
  { "index": 18, "name": "owners cabin", "filename": "18_owners_cabin.png", "x": 2030, "y": 823, "width": 119, "height": 101, "opacity": 255 },
  { "index": 19, "name": "Billiard Room", "filename": "19_Billiard_Room.png", "x": 1850, "y": 883, "width": 100, "height": 73, "opacity": 255 },
  { "index": 20, "name": "Small Swimming", "filename": "20_Small_Swimming.png", "x": 2138, "y": 863, "width": 159, "height": 125, "opacity": 255 },
  { "index": 21, "name": "Boats", "filename": "21_Boats.png", "x": 2042, "y": 1197, "width": 158, "height": 113, "opacity": 255 },
  { "index": 22, "name": "Entrance", "filename": "22_Gate.png", "x": 1364, "y": 1398, "width": 114, "height": 112, "opacity": 255 },
  { "index": 23, "name": "Duplex Villa", "filename": "23_Duplex_Villa.png", "x": 1590, "y": 692, "width": 141, "height": 128, "opacity": 255 },
  { "index": 24, "name": "Eco Cabin", "filename": "24_Eco_Cabin.png", "x": 1487, "y": 751, "width": 135, "height": 104, "opacity": 255 },
  { "index": 25, "name": "Mud House", "filename": "25_Mud_House.png", "x": 1479, "y": 884, "width": 121, "height": 104, "opacity": 255 },
  { "index": 26, "name": "Mid House 2", "filename": "26_Mid_House_2.png", "x": 2344, "y": 1839, "width": 121, "height": 104, "opacity": 255 },
  { "index": 27, "name": "Cricket Field", "filename": "27_Cricket_Field.png", "x": 1517, "y": 1021, "width": 202, "height": 200, "opacity": 255 },
  { "index": 28, "name": "Kids playground", "filename": "28_Kids_playground.png", "x": 1725, "y": 724, "width": 181, "height": 130, "opacity": 255 },
  { "index": 29, "name": "Amphi theatre", "filename": "29_Amphi_theatre.png", "x": 2676, "y": 458, "width": 182, "height": 136, "opacity": 255 },
  { "index": 30, "name": "Water villas", "filename": "30_Water_villas.png", "x": 2239, "y": 407, "width": 239, "height": 261, "opacity": 255 },
  { "index": 31, "name": "Tower Building", "filename": "31_Tower_Building.png", "x": 1834, "y": 407, "width": 85, "height": 156, "opacity": 255 },
  { "index": 32, "name": "Green Cabins", "filename": "32_Green_Cabins.png", "x": 1958, "y": 460, "width": 403, "height": 242, "opacity": 255 },
  { "index": 33, "name": "Agri  fields", "filename": "33_Agri__fields.png", "x": 961, "y": 597, "width": 330, "height": 236, "opacity": 255 },
  { "index": 34, "name": "Agri  field 2", "filename": "34_Agri__field_2.png", "x": 2107, "y": 1737, "width": 155, "height": 112, "opacity": 255 },
  { "index": 35, "name": "Laundry", "filename": "35_Laundry.png", "x": 2195, "y": 1322, "width": 105, "height": 84, "opacity": 255 },
  { "index": 36, "name": "Cow Farm", "filename": "36_Cow_Farm.png", "x": 2344, "y": 1449, "width": 175, "height": 125, "opacity": 255 },
  { "index": 37, "name": "Female Staff Quarters", "filename": "37_Female_Staff_Quarters.png", "x": 2252, "y": 1358, "width": 86, "height": 81, "opacity": 255 },
  { "index": 38, "name": "Agri  field 3", "filename": "38_Agri__field_3.png", "x": 2191, "y": 1589, "width": 106, "height": 78, "opacity": 255 },
  { "index": 39, "name": "Hatchery", "filename": "39_Hatchery.png", "x": 2190, "y": 1384, "width": 100, "height": 75, "opacity": 255 },
  { "index": 40, "name": "Football Field", "filename": "40_Football_Field.png", "x": 1551, "y": 1322, "width": 264, "height": 224, "opacity": 255 },
  { "index": 41, "name": "Parrking", "filename": "41_Parrking.png", "x": 1201, "y": 1153, "width": 205, "height": 225, "opacity": 255 },
  { "index": 42, "name": "Dream House", "filename": "42_Layer_8.png", "x": 2179, "y": 1839, "width": 185, "height": 169, "opacity": 255 },
  { "index": 43, "name": "Reception", "filename": "43_Reception.png", "x": 1431, "y": 1257, "width": 106, "height": 86, "opacity": 255 },
  { "index": 44, "name": "Twin Cabin", "filename": "44_Twin_Cabin.png", "x": 1727, "y": 1299, "width": 88, "height": 56, "opacity": 255 },
  { "index": 45, "name": "Cycle", "filename": "45_Cycle.png", "x": 1375, "y": 1141, "width": 103, "height": 93, "opacity": 255 },
  { "index": 46, "name": "Map Ledgend", "filename": "46_Map_Ledgend.png", "x": 3103, "y": 277, "width": 718, "height": 160, "opacity": 255 },
  { "index": 48, "name": "Tree copy 56", "filename": "48_Tree_copy_56.png", "x": 799, "y": 158, "width": 2212, "height": 1823, "opacity": 255 }
];

export const IMAGE_URLS: ImageUrls = {
  "BG": "https://res.cloudinary.com/dukaroz3u/image/upload/v1753012363/interactive_map/BG.png",
  "Prayer_room": "https://res.cloudinary.com/dukaroz3u/image/upload/v1753012364/interactive_map/Prayer_room.png",
  "Big_Kitchen": "https://res.cloudinary.com/dukaroz3u/image/upload/v1753012365/interactive_map/Big_Kitchen.png",
  "Garden_restaurant": "https://res.cloudinary.com/dukaroz3u/image/upload/v1753012366/interactive_map/Garden_restaurant.png",
  "Spice_Restaurant": "https://res.cloudinary.com/dukaroz3u/image/upload/v1753012367/interactive_map/Spice_Restaurant.png",
  "New_Kitchen": "https://res.cloudinary.com/dukaroz3u/image/upload/v1753012368/interactive_map/New_Kitchen.png",
  "Split_": "https://res.cloudinary.com/dukaroz3u/image/upload/v1753012369/interactive_map/Split_.png",
  "Store": "https://res.cloudinary.com/dukaroz3u/image/upload/v1753012371/interactive_map/Store.png",
  "Generator": "https://res.cloudinary.com/dukaroz3u/image/upload/v1753012371/interactive_map/Generator.png",
  "owners_cabin": "https://res.cloudinary.com/dukaroz3u/image/upload/v1753012373/interactive_map/owners_cabin.png",
  "Billiard_Room": "https://res.cloudinary.com/dukaroz3u/image/upload/v1753012374/interactive_map/Billiard_Room.png",
  "Surface": "https://res.cloudinary.com/dukaroz3u/image/upload/v1753012407/interactive_map/Surface.png",
  "Small_Swimming": "https://res.cloudinary.com/dukaroz3u/image/upload/v1753012409/interactive_map/Small_Swimming.png",
  "Boats": "https://res.cloudinary.com/dukaroz3u/image/upload/v1753012410/interactive_map/Boats.png",
  "Entrance": "https://res.cloudinary.com/dukaroz3u/image/upload/v1753012411/interactive_map/Gate.png",
  "Duplex_Villa": "https://res.cloudinary.com/dukaroz3u/image/upload/v1753012413/interactive_map/Duplex_Villa.png",
  "Eco_Cabin": "https://res.cloudinary.com/dukaroz3u/image/upload/v1753012414/interactive_map/Eco_Cabin.png",
  "Mud_House": "https://res.cloudinary.com/dukaroz3u/image/upload/v1753012415/interactive_map/Mud_House.png",
  "Mid_House_2": "https://res.cloudinary.com/dukaroz3u/image/upload/v1753012416/interactive_map/Mid_House_2.png",
  "Cricket_Field": "https://res.cloudinary.com/dukaroz3u/image/upload/v1753012418/interactive_map/Cricket_Field.png",
  "Kids_playground": "https://res.cloudinary.com/dukaroz3u/image/upload/v1753012419/interactive_map/Kids_playground.png",
  "Amphi_theatre": "https://res.cloudinary.com/dukaroz3u/image/upload/v1753012421/interactive_map/Amphi_theatre.png",
  "Male_Staff_Quarters": "https://res.cloudinary.com/dukaroz3u/image/upload/v1753012422/interactive_map/Male_Staff_Quarters.png",
  "Water_villas": "https://res.cloudinary.com/dukaroz3u/image/upload/v1753012423/interactive_map/Water_villas.png",
  "Tower_Building": "https://res.cloudinary.com/dukaroz3u/image/upload/v1753012424/interactive_map/Tower_Building.png",
  "Green_Cabins": "https://res.cloudinary.com/dukaroz3u/image/upload/v1753012426/interactive_map/Green_Cabins.png",
  "Agri__fields": "https://res.cloudinary.com/dukaroz3u/image/upload/v1753012429/interactive_map/Agri__fields.png",
  "Agri__field_2": "https://res.cloudinary.com/dukaroz3u/image/upload/v1753012430/interactive_map/Agri__field_2.png",
  "Laundry": "https://res.cloudinary.com/dukaroz3u/image/upload/v1753012431/interactive_map/Laundry.png",
  "Cow_Farm": "https://res.cloudinary.com/dukaroz3u/image/upload/v1753012432/interactive_map/Cow_Farm.png",
  "Female_Staff_Quarters": "https://res.cloudinary.com/dukaroz3u/image/upload/v1753012433/interactive_map/Female_Staff_Quarters.png",
  "Agri__field_3": "https://res.cloudinary.com/dukaroz3u/image/upload/v1753012433/interactive_map/Agri__field_3.png",
  "Hatchery": "https://res.cloudinary.com/dukaroz3u/image/upload/v1753012435/interactive_map/Hatchery.png",
  "Walkway": "https://res.cloudinary.com/dukaroz3u/image/upload/v1753012436/interactive_map/Walkway.png",
  "Football_Field": "https://res.cloudinary.com/dukaroz3u/image/upload/v1753012438/interactive_map/Football_Field.png",
  "Parrking": "https://res.cloudinary.com/dukaroz3u/image/upload/v1753012439/interactive_map/Parrking.png",
  "Dream_House": "https://res.cloudinary.com/dukaroz3u/image/upload/v1753012440/interactive_map/Layer_8.png",
  "Reception": "https://res.cloudinary.com/dukaroz3u/image/upload/v1753012441/interactive_map/Reception.png",
  "Twin_Cabin": "https://res.cloudinary.com/dukaroz3u/image/upload/v1753012442/interactive_map/Twin_Cabin.png",
  "Cycle": "https://res.cloudinary.com/dukaroz3u/image/upload/v1753012443/interactive_map/Cycle.png",
  "Map_Ledgend": "https://res.cloudinary.com/dukaroz3u/image/upload/v1753012444/interactive_map/Map_Ledgend.png",
  "Logo": "https://res.cloudinary.com/dukaroz3u/image/upload/v1753012446/interactive_map/Logo.png",
  "Tree_copy_56": "https://res.cloudinary.com/dukaroz3u/image/upload/v1753012452/interactive_map/Tree_copy_56.png",
  "Roads_buggy": "https://res.cloudinary.com/dukaroz3u/image/upload/v1753012453/interactive_map/Roads_buggy.png",
  "Terrace": "https://res.cloudinary.com/dukaroz3u/image/upload/v1753012455/interactive_map/Terrace.png",
  "Big_Pools_Area": "https://res.cloudinary.com/dukaroz3u/image/upload/v1753012457/interactive_map/Big_Pools_Area.png",
  "Gym": "https://res.cloudinary.com/dukaroz3u/image/upload/v1753012458/interactive_map/Gym.png",
  "Dream_villa": "https://res.cloudinary.com/dukaroz3u/image/upload/v1753012459/interactive_map/Dream_villa.png",
  "Grand_hall": "https://res.cloudinary.com/dukaroz3u/image/upload/v1753012460/interactive_map/Grand_hall.png"
};