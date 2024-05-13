public class GuessingGame {
	Player p1;
	Player p2;
	Player p3;

	public void startGame() {
		p1 = new Player();
		p2 = new Player();
		p3 = new Player();

		int guessPlayer1 = 0;
		int guessPlayer2 = 0;
		int guessPlayer3 = 0;
		

		boolean player1IsRight = false;
		boolean player2IsRight = false;
		boolean player3IsRight = false;

		int targetNumber = (int) (Math.random() * 10);
		System.out.println("I\'m thinking about a number between 1 and 9");

		while (true) {
			p1.makeGuess();
			p2.makeGuess();
			p3.makeGuess();

			guessPlayer1 = p1.number; 
			System.out.println("The player number one is guessing the number: " + guessPlayer1);

			guessPlayer2 = p2.number; 
			System.out.println("The player number one is guessing the number: " + guessPlayer2);

			guessPlayer3 = p3.number; 
			System.out.println("The player number one is guessing the number: " + guessPlayer3);

			if (guessPlayer1 == targetNumber) {
				player1IsRight = true;
			}
			if (guessPlayer2 == targetNumber) {
				player2IsRight = true;
			}
			if (guessPlayer2 == targetNumber) {
				player2IsRight = true;
			}

			if (player1IsRight || player2IsRight || player3IsRight) {
				System.out.println("We've got a winner!");

				System.out.println("The player 1 is right? " + player1IsRight);
				System.out.println("The player 2 is right? " + player2IsRight);
				System.out.println("The player 3 is right? " + player3IsRight);
			} else {
				System.out.println("Players will have to try again.");
			}
		}
	}
}