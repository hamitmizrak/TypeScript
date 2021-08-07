package com.hamit.car;

import java.util.Scanner;

//@Data
//@NoArgsConstructor
//@AllArgsConstructor
public class Araba {

	public static void main(String[] args) {
		Scanner kalvye = new Scanner(System.in);
		System.out.println("kelime giriniz");
		String kelime = kalvye.nextLine();
	}

	private String adi;
	private String marka;

	public Araba() {
		// TODO Auto-generated constructor stub
	}

	public Araba(String adi, String marka) {
		this.adi = adi;
		this.marka = marka;
	}

	public String getAdi() {
		return adi;
	}

	public void setAdi(String adi) {
		this.adi = adi;
	}

	public String getMarka() {
		return marka;
	}

	public void setMarka(String marka) {
		this.marka = marka;
	}

	@Override
	public String toString() {
		return "Araba [adi=" + adi + ", marka=" + marka + "]";
	}

}
