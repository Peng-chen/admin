package com.admin.servlet;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.OutputStreamWriter;
import java.io.PrintWriter;
import java.io.UnsupportedEncodingException;

import javax.servlet.ServletOutputStream;
import javax.servlet.WriteListener;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpServletResponseWrapper;

public class BodyReaderHttpServletResponseWrapper extends
		HttpServletResponseWrapper {

	private ByteArrayOutputStream buffer = null;
	private ServletOutputStream out = null;
	private PrintWriter writer = null;

	public BodyReaderHttpServletResponseWrapper(HttpServletResponse resp)
			throws IOException {
		super(resp);
		buffer = new ByteArrayOutputStream();// 真正存储数据的流
		out = new WapperedOutputStream(buffer);
		writer = new PrintWriter(new OutputStreamWriter(buffer,
				this.getCharacterEncoding()));
	}

	@Override
	public ServletOutputStream getOutputStream() throws IOException {
		return out;
	}

	@Override
	public PrintWriter getWriter() throws UnsupportedEncodingException {
		return writer;
	}

	@Override
	public void flushBuffer() throws IOException {
		if (out != null) {
			out.flush();
		}
		if (writer != null) {
			writer.flush();
		}
	}

	@Override
	public void reset() {
		buffer.reset();
	}

	public byte[] getResponseData() throws IOException {
		flushBuffer();
		return buffer.toByteArray();
	}

	private class WapperedOutputStream extends ServletOutputStream {
		private ByteArrayOutputStream byteOutStream = null;

		public WapperedOutputStream(ByteArrayOutputStream stream)
				throws IOException {
			byteOutStream = stream;
		}
		
		

		@Override
		public void write(int b) throws IOException {
			byteOutStream.write(b);
		}



		@Override
		public boolean isReady() {
			// TODO Auto-generated method stub
			return false;
		}



		@Override
		public void setWriteListener(WriteListener writeListener) {
			// TODO Auto-generated method stub
		}
	}
}
