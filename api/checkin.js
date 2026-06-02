export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'ต้องส่ง POST เท่านั้น' });
  }
  const { walletAddress } = req.body;
  
  // ส่งข้อความตอบกลับไปบอกหน้าบ้าน
  return res.status(200).json({
    success: true,
    message: `บันทึกแต้มให้กระเป๋า ${walletAddress} สำเร็จ! (+10 แต้ม)`
  });
}
