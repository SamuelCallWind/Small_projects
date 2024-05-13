public class Film {
	int rating;
	String name
	String genre;

	void playIt() {
		System.out.println("Playing the movie: " + this.name);
		System.out.println("The genre of the movie is: " + this.genre);
		System.out.println("The rating of the movie is: " + this.rating);

	}
}

public class FilmTestDrivee {
	public static void main(Strings[] args) {
		Film filmOne = new Film();
		Film filmTwo = new Film();

		filmOne.name = "Donald Duck & the mighty mouse";
		filmOne.genre = "Comedy";
		filmOne.rating = 5;

		filmTwo.name = "You son of a gun";
		filmTwo.genre = "Western";
		filmTwo.rating = 4;
	}


}