public class SongOMatic {

	public static void main(String[] args) {

		String[] wordList = {"24/7", "The test boy", "Go my man", "Stopping cigarettes", "B-to-B", "Almost there baby", "are you sure?", "keeping the lyrics on"};

		String[] wordListTwo = {"Demotivated", "motivated as hell !", "cooperative", "cracked", "smoked", "fired up"};

		String[] wordListThree = {"process","Typing point", "core competency", "architecture", "Bollocks", "Anti-you", "wally wallah", "portal", "destiny"};

	
		int lengthListOne, lengthListTwo, lengthListThree, randomOne, randomTwo, randomThree;

		lengthListOne = wordList.length();
		lengthListTwo = wordListTwo.length();
		lengthListThree = wordListThree.length();
		
		
		randomOne = Math.random() * lengthListOne;
		randomTwo = Math.random() * lengthListTwo;
		randomThree = Math.random() * lengthListThree;

		String phrase = wordList[randomOne] + " " + wordListTwo[randomTwo] + " " + wordListThree[randomThree] + ".";
		System.out.println(phrase);

	}



}