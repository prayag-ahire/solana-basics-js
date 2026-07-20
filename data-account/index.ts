import { clusterApiUrl, Connection, Keypair, LAMPORTS_PER_SOL, PublicKey, SystemProgram, Transaction,  } from "@solana/web3.js";

const connection = new Connection(clusterApiUrl("devnet"), "confirmed");
const payerseed = Uint8Array.from([163, 249, 219, 56, 28, 148, 11, 56, 219, 17, 40, 36, 206, 109, 86, 133, 126, 77, 58, 107, 169, 112, 175, 27, 229, 181, 70, 49, 183, 249, 232, 54, 19, 109, 26, 31, 66, 223, 135, 226, 168, 45, 236, 81, 73, 187, 109, 104, 66, 251, 73, 89, 167, 8, 35, 142, 198, 174, 148, 196, 37, 109, 76, 120]);
const payerkey = Keypair.fromSecretKey(payerseed).publicKey;

const senderkey = Keypair.generate();

async function createDataAccount() {
  const tx = await new Transaction().add(
    SystemProgram.createAccount({
      fromPubkey: payerkey,
      lamports: 0.1 * LAMPORTS_PER_SOL,
      newAccountPubkey: senderkey,
      
    })
  )
}