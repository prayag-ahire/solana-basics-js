import { clusterApiUrl, Connection, Keypair, LAMPORTS_PER_SOL, sendAndConfirmTransaction, SystemProgram, Transaction } from "@solana/web3.js"

const connection = new Connection(clusterApiUrl('devnet'), "confirmed");

const receiverKey = Keypair.generate();
console.log(receiverKey.publicKey.toBase58());

const senderKey = Uint8Array.from([163, 249, 219, 56, 28, 148, 11, 56, 219, 17, 40, 36, 206, 109, 86, 133, 126, 77, 58, 107, 169, 112, 175, 27, 229, 181, 70, 49, 183, 249, 232, 54, 19, 109, 26, 31, 66, 223, 135, 226, 168, 45, 236, 81, 73, 187, 109, 104, 66, 251, 73, 89, 167, 8, 35, 142, 198, 174, 148, 196, 37, 109, 76, 120]);
const sender = Keypair.fromSecretKey(senderKey);

const sol_amount = 0.1;

async function createAccount() {
  const tx = new Transaction().add(
    SystemProgram.transfer({
      fromPubkey: sender.publicKey,
      toPubkey: receiverKey.publicKey,
      lamports: sol_amount * LAMPORTS_PER_SOL
    })
  );

  const txId = await sendAndConfirmTransaction(connection, tx, [sender]);

  console.log(`transeciton succsessful ${txId}`);
}
  createAccount();
